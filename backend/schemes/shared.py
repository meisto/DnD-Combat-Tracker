# author: meisto
# date: 2024-01-26 00:48:02
from sqlmodel import SQLModel, Field


class Race(SQLModel, table=True):
    name: str = Field(primary_key=True)
    desc: str
