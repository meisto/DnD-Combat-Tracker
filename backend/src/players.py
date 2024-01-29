# ======================================================================
# Author: meisto
# Creation Date: Tue 16 Jan 2024 06:53:46 PM CET
# Description: -
# ======================================================================
from typing import Optional, List
from pydantic import BaseModel
from .shared import Attributes, Race, Sense, Proficiencies, Action


class Class(BaseModel):
    name: str
    subclass: Optional[str] = None
    level: int


class Money(BaseModel):
    copperPieces: int = 0
    silverPieces: int = 0
    goldPieces: int = 0
    platinumPieces: int = 0


class InventoryItem(BaseModel):
    name: str
    amount: int
    unit: str


class Inventory(BaseModel):
    money: Money
    items: List[InventoryItem]


class Player(BaseModel):
    id: str
    name: str
    race: Race
    alignment: str
    background: Optional[str]
    classes: List[Class]
    speed: List[str]
    attributes: Attributes
    senses: List[Sense]
    actions: List[Action]
    bonusActions: List[Action]
    options: List[str]
    inventory: Inventory
    maxHitPoints: int
    hitDice: str
    armorClass: int
    proficiencies: Proficiencies
    armorType: str
