# ======================================================================
# Author: meisto
# Creation Date: Tue 16 Jan 2024 06:39:59 PM CET
# Description: -
# ======================================================================
from typing import List, Optional, Tuple

from pydantic import BaseModel


class Attributes(BaseModel):
    STR: int
    DEX: int
    CON: int
    INT: int
    WIS: int
    CHA: int


class Race(BaseModel):
    name: str
    desc: str


class Sense(BaseModel):
    name: str
    value: int
    unit: Optional[str] = None


class Proficiencies(BaseModel):
    armor: Optional[List[str]] = None
    weapons: Optional[List[str]] = None
    languages: List[str]
    savingThrows: List[str]
    skills: List[str]
    tools: List[str]
    other: Optional[List[Tuple[str, str]]] = None


class Immunities(BaseModel):
    damageImmunities: Optional[List[str]] = None
    conditionImmunities: Optional[List[str]] = None


class Trait(BaseModel):
    name: str
    desc: str


class Action(BaseModel):
    name: str
    desc: str
