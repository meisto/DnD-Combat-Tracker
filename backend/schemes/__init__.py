# author: meisto
# date: 2024-01-24 19:22:12
from sqlmodel import create_engine, SQLModel

from config import Config

# Import local files so they are included into the database
from .npc import *
from .pc import *

engine = create_engine(Config.SQLITE_URL, echo=True)


def set_up_database():
    """Set up the database and generate tables."""
    SQLModel.metadata.create_all(engine)
