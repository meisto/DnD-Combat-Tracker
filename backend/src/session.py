# ======================================================================
# Author: meisto
# Creation Date: Sun 21 Jan 2024 05:08:31 PM CET
# Description: -
# ======================================================================
from typing import Dict, List
from logging import debug

from pydantic import BaseModel, Field

from .players import Player
from .enemies import Enemy
from .turn import Round, Turn


class Stats(BaseModel):
    id: str
    health: int
    status: List[str] = []


class Session(BaseModel):
    id: str = Field(default_factory=lambda: "-")
    allies: Dict[str, Player] = Field(default_factory=dict)
    enemies: Dict[str, Enemy] = Field(default_factory=dict)
    stats: Dict[str, Stats] = Field(default_factory=dict)
    round: Round = Field(default_factory=lambda: Round(number=0, index=0, elements=[]))

    def model_post_init(self, *args, **kwargs) -> None:
        debug(f"Session '{self.id}' has been created with args '{args}' and kwargs '{kwargs}'.")

    def addPlayer(self, player: Player):
        if player.id in self.allies:
            debug("Tried to add a player to a session that already exists.")
            return

        self.allies[player.id] = player
        self.stats[player.id] = Stats(id=player.id, health=player.maxHitPoints)
        self.round.elements.append(
            Turn(characterId=player.id, characterName=player.name, initiative=0)
        )

    def addEnemy(self, enemy: Enemy):
        if enemy.id in self.enemies:
            debug("Tried to add an enemy to a session that already exists.")
            return
        self.enemies[enemy.id] = enemy
        self.stats[enemy.id] = Stats(id=enemy.id, health=enemy.maxHitPoints)

        if enemy.individualName is not None:
            name = enemy.individualName
        else:
            name = enemy.name
        self.round.elements.append(Turn(characterId=enemy.id, characterName=name, initiative=0))
