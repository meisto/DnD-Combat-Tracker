# ======================================================================
# Author: meisto
# Creation Date: Sun 14 Jan 2024 06:21:10 PM CET
# Description: -
# ======================================================================
from typing import List
from logging import log, DEBUG

from pydantic import BaseModel


class Turn(BaseModel):
    characterId: str
    characterName: str
    initiative: int


class Round(BaseModel):
    number: int
    index: int
    elements: List[Turn]

    def resort(self):
        # -x.initiative As to sort highest -> lowest
        self.elements = sorted(self.elements, key=lambda x: -x.initiative)

    def set_initiative(self, character_id: str, initiative: int):
        for el in self.elements:
            if el.characterId == character_id:
                el.initiative = initiative
                return

        log(
            msg=f"Tried to set initiative for unknown character '{character_id}'.",
            level=DEBUG,
        )

    def has_next_turn(self):
        return self.active_character_index < (len(self.elements) - 1)

    def next_turn(self):
        if self.has_next_turn:
            self.active_character_index += 1
        else:
            self.next_round()

    def next_round(self):
        self.number += 1
        self.active_character_index = 0
        self.resort()
