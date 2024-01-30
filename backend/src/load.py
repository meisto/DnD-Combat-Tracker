# ======================================================================
# Author: meisto
# Creation Date: Sun 21 Jan 2024 06:15:20 PM CET
# Description: -
# ======================================================================
from logging import debug
from glob import glob
from os.path import join as pjoin
import json

from sqlmodel import Session, select

from schemes import engine, NonPlayerCharacter, PlayerCharacter




def load_given_characters():
    """Load all specified characters into the database. This will skip characters if it already exists."""
    _load_enemy_templates()
    _load_players()


def _load_players():

    print("Found players:")
    player_files = []
    for path in glob(pjoin("data", "characters", "players", "*.json")):
        print("\t", path)

        with open(path, mode="r") as player_file:
            player_files.append(json.load(player_file))

    if len(player_files) <= 0:
        debug("Found no player files.")
        return

    with Session(engine) as session:
        for player in player_files:

            name = player.get("name")
            if name is None:
                debug("Found player file without a name.")
                continue

            statement = select(PlayerCharacter).where(PlayerCharacter.name == name)
            results = session.exec(statement)

            if len(results.all()) <= 0:
                session.add(PlayerCharacter(**player))
            else:
                debug(f"\tPlayer '{name}' already exists in the database.")
        
        session.commit()


def _load_enemy_templates():
    """Load enemies from the data folder."""

    debug("Found enemy template files:")
    templates = []
    for path in glob(pjoin("data", "characters", "enemies", "unnamed", "*.json")):
        debug("\t", path)

        with open(path, mode="r") as enemy_file:
            templates.append(json.load(enemy_file))

    if len(templates) <= 0:
        debug("\t-")
        debug("Found no template files.")
        return

    with Session(engine) as session:
        for template in templates:
            if not "name" in template:
                debug("Found template file without name.")
                continue

            name = template["name"]

            statement = select(NonPlayerCharacter).where(NonPlayerCharacter.name == name)
            results = session.exec(statement)

            if len(results.all()) <= 0:
                npc = NonPlayerCharacter(**template)
                session.add(npc)
            else:
                debug(f"NPC with name '{name}' already exists in the database")

        session.commit()
