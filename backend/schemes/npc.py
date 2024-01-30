# author: meisto
# date: 2024-01-24 18:27:32
from typing import Optional

from sqlmodel import Field, SQLModel


class NonPlayerCharacterInstance(SQLModel, table=True):
    name: str = Field(primary_key=True)
    general_name: str = Field(foreign_key="nonplayercharacter.name")

    current_hit_points: int
    temporary_hit_points: int = 0
    initiative: int = 0


class NonPlayerCharacter(SQLModel, table=True):
    # Character Information
    name: str = Field(primary_key=True)
    race_name: str
    alignment: str
    size: int  # {0: tiny, 1: small, 2: medium, 3: large}

    # Attributes
    STR: int
    DEX: int
    CON: int
    INT: int
    WIS: int
    CHA: int

    # Hit Points
    max_hit_points: int
    hit_dice: str

    # Armor
    armor_class: int
    armor_type: str

    # Others
    challenge_rating: float
    speed: int
    speed_flying: int = 0
    speed_swimming: int = 0
    speed_crawling: int = 0

    passive_perception: int
    blindsight: int = 0
    darkvision: int = 0
    truesight: int = 0
    tremorsense: int = 0

    description: Optional[str] = None

    # TODO:
    # Rettungswürfe
    # Fertigkeiten
    # Empfindlichkeiten, Resistenzen, Immunitäten
    # Eingescränkter Einsatz/Ladungen
    # has_reaction


class NonPlayerActions(SQLModel, table=True):
    npc_name: str = Field(foreign_key="nonplayercharacter.name", primary_key=True)
    name: str = Field(primary_key=True)
    desc: str
    is_bonus_action: bool = False


class NonPlayerTraits(SQLModel, table=True):
    npc_name: str = Field(foreign_key="nonplayercharacter.name", primary_key=True)
    name: str = Field(primary_key=True)


class NonPlayerLanguages(SQLModel, table=True):
    npc_name: str = Field(foreign_key="nonplayercharacter.name", primary_key=True)
    language: str = Field(primary_key=True)
    speaking: bool = True
    understanding: bool = True
