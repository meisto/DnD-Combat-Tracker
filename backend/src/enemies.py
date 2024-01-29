# ======================================================================
# Author: meisto
# Creation Date: Tue 16 Jan 2024 06:37:39 PM CET
# Description: -
# ======================================================================
from glob import glob
from os.path import join as pjoin
from uuid import uuid4
from typing import List, Optional
import json

from pydantic import BaseModel

from .shared import Attributes, Race, Sense, Immunities, Trait, Action, Proficiencies


class ChallengeRating(BaseModel):
    value: float
    xp: int


class Enemy(BaseModel):
    id: str
    name: str
    individualName: Optional[str] = None
    race: Race
    alignment: str
    armorClass: int
    armorType: str
    speed: List[str]
    maxHitPoints: int
    hitDice: str
    attributes: Attributes
    challengeRating: ChallengeRating
    senses: List[Sense]
    immunities: Immunities
    traits: Optional[List[Trait]] = None
    actions: List[Action]
    bonusActions: Optional[List[Action]]
    proficiencies: Proficiencies
    desc: Optional[str] = None


def loadUnnamedEnemyBases() -> List[Enemy]:
    res = []

    print("Found named enemies:")
    for path in glob(pjoin("data", "characters", "enemies", "unnamed", "*.json")):
        print("\t", path)

        with open(path, mode="r") as enemy_file:
            data = json.load(enemy_file)

            # Generate a per-session id
            data["id"] = str(uuid4())

            res.append(Enemy(**data))

    return res
