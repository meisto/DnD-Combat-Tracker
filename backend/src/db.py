# ======================================================================
# Author: meisto
# Creation Date: Thu 11 Jan 2024 12:53:59 AM CET
# Description: -
# ======================================================================
from typing import List, Optional, Dict, Union
from uuid import uuid4
import copy
from logging import debug

from pydantic import BaseModel

from .players import Player
from .enemies import Enemy
from .session import Session
from .load import load_players


class Data(BaseModel):
    players: Dict[str, Player] = {x.id: x for x in load_players()}
    named_enemies: Dict[str, Enemy] = dict()
    unnamed_enemies: Dict[str, Enemy] = {}
    sessions: Dict[str, Session] = dict()

    def generate_characters(
        self, id: str, amount: Optional[int]
    ) -> Union[List[Player], List[Enemy]]:
        # Handle players
        if id in self.players:
            return [self.players[id]]

        # Handle named enemies
        if id in self.named_enemies:
            if amount is not None:
                debug(f"Received generation command for a named enemy with an amount.")

            inst = self.get_enemy_instance(id)
            if inst is not None:
                return [inst]
            else:
                return []

        # Handle named enemies
        if id in self.unnamed_enemies:
            if amount == None or amount <= 0:
                # This should be changed once named enemies are implemented
                debug(
                    msg=f"Instance of generic enemy '{id}' required without an amount, set amount to 1."
                )
                amount = 1

            if amount == 1:
                inst = self.get_enemy_instance(id)
                if inst is not None:
                    return [inst]
                else:
                    return []

            return [
                x
                for x in [self.get_enemy_instance(id, suffix=f" {i}") for i in range(1, amount + 1)]
                if x is not None
            ]

        debug(f"Tried to create instance for unknown id '{id}'.")
        return []

    def register_session(self, session: Session):
        self.sessions[session.id] = session

    def get_enemy_instance(self, base_id: str, suffix: Optional[str] = None) -> Optional[Enemy]:
        if base_id in self.named_enemies:
            # Return a deepcopy of the named as to not change the origional
            enemy = copy.deepcopy(self.named_enemies[base_id])

            # Give it a new id as to change it from the original
            enemy.id = str(uuid4())
            if enemy.individualName is None:
                enemy.individualName = enemy.name

            return enemy

        #
        if base_id not in self.unnamed_enemies:
            return None

        enemy = copy.deepcopy(self.unnamed_enemies[base_id])
        enemy.id = str(uuid4())
        if suffix is not None:
            enemy.individualName = enemy.name + " " + suffix
        else:
            enemy.individualName = enemy.name

        return enemy


data = Data()


# ======================================================================
# ======================================================================
## The functions below need to be refactored at some point


def set_initiative(session_id: str, character_id: str, value: int) -> None:
    if session_id not in data.sessions:
        debug(f"Could not find session {session_id} to set initiative.")
        return

    data.sessions[session_id].round.set_initiative(character_id=character_id, initiative=value)


def get_allies(session_id: str) -> List[Player]:
    return list(data.sessions[session_id].allies.values())


def get_enemies(session_id: str) -> List[Enemy]:
    return list(data.sessions[session_id].enemies.values())
