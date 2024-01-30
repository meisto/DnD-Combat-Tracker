# author: meisto
# date: 2024-01-26 00:44:51
from typing import Optional

from sqlmodel import SQLModel, Field


class PlayerCharacterAction(SQLModel, table=True):
    character_id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(primary_key=True)
    desc: str


class PlayerCharacterClass(SQLModel, table=True):
    pc_id: int = Field(primary_key=True)
    name: str = Field(primary_key=True)
    subclass: Optional[str] = None
    level: int


class PlayerCharacterBonusAction(SQLModel):
    character_id: int = Field(primary_key=True)
    name: str = Field(primary_key=True)
    desc: str


class PlayerCharacter(SQLModel, table=True):
    # Character Informations
    name: str = Field(primary_key=True)
    alignment: str
    race_name: str
    size: int
    background: Optional[str] = None
    player_name: str

    # Attributes
    STR: int
    DEX: int
    CON: int
    INT: int
    WIS: int
    CHA: int

    # Hit Points
    hit_points: int
    max_hit_points: int
    temporary_hit_points: int = 0
    hit_dice: str

    # Armor
    armor_class: int
    armor_type: str

    # Money
    platinum_pieces: int = 0
    gold_pieces: int = 0
    silver_pieces: int = 0
    copper_pieces: int = 0

    # Others
    initiative: int = 0
    speed_unit: str
    speed: float
    speed_flying: int = 0
    speed_swimming: int = 0
    speed_crawling: int = 0
    passive_perception: int
    blindsight: int = 0
    darkvision: int = 0
    truesight: int = 0
    tremorsense: int = 0
    # TODO:
    # Traits
    # Immunities
    # Proficiencies
    # death saving throws
    # Eingescränkter Einsatz/Ladungen
    # Rettungswürfe
    # Fertigkeiten
    # Empfindlichkeiten, Resistenzen, Immunitäten
    # Eingescränkter Einsatz/Ladungen
    # has_reaction
