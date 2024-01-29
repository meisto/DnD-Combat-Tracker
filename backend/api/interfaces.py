# ======================================================================
# Author: meisto
# Creation Date: Sun 21 Jan 2024 07:25:07 PM CET
# Description: -
# ======================================================================
from typing import Optional, List

from pydantic import BaseModel


# Classes for input validation
class SetInitiativeMessage(BaseModel):
    name: str
    value: int


class CharacterSelectionInformation(BaseModel):
    name: str
    amount: int


class NewStateMessage(BaseModel):
    id: str
    health: int
    status: List[str]


class IDMessage(BaseModel):
    id: str
