# ======================================================================
# Author: meisto
# Creation Date: Sun 21 Jan 2024 06:15:20 PM CET
# Description: -
# ======================================================================
from typing import List
from glob import glob
from os.path import join as pjoin
import json
from uuid import uuid4

from .players import Player


def load_players() -> List[Player]:
    res = []

    print("Found players:")
    for path in glob(pjoin("data", "characters", "players", "*.json")):
        print("\t", path)

        with open(path, mode="r") as player_file:
            data = json.load(player_file)

            # Generate a per-session id
            data["id"] = str(uuid4())

            res.append(Player(**data))

    return res
