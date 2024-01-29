# author: meisto
# date: 2024-01-26 00:11:08

from typing import Optional
from sqlmodel import SQLModel, Field


class Item(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    character_id: Optional[int]
    name: str
