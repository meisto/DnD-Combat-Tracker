# author: meisto
# date: 2024-01-24 19:22:12
import json
from glob import glob
from os.path import join as pjoin
from logging import debug

from sqlmodel import create_engine, SQLModel, Session, select

from config import Config

# Import local files so they are included into the database
from src.models.npc import *
from src.models.pc import *

engine = create_engine(Config.SQLITE_URL, echo=True)


def set_up_database():
    """Set up the database and generate tables."""

    SQLModel.metadata.create_all(engine)
    _load_enemy_templates()


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
