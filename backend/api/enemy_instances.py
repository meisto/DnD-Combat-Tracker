# author: meisto
# date: 2024-01-26 16:57:38
from typing import Optional, List

from fastapi import APIRouter
from sqlmodel import Session, select

from sqlmodel import Session, select

from src.models import engine, NonPlayerCharacterInstance
from src.models.npc import NonPlayerCharacterInstance

enemy_instance_router = APIRouter(prefix="/instances")


@enemy_instance_router.get("/all")
def get_all_enemies() -> List[NonPlayerCharacterInstance]:
    with Session(engine) as session:
        return session.exec(select(NonPlayerCharacterInstance)).all()


@enemy_instance_router.get("/{name}")
def get_enemy_instance(name: str) -> Optional[NonPlayerCharacterInstance]:
    with Session(engine) as session:
        return session.exec(
            select(NonPlayerCharacterInstance).where(NonPlayerCharacterInstance.name == name)
        ).first()


@enemy_instance_router.put("/{name}/set_initiative")
def set_initiative(name: str, value: int = 0) -> None:
    print(name, value)
    with Session(engine) as session:
        enemy = session.exec(
            select(NonPlayerCharacterInstance).where(NonPlayerCharacterInstance.name == name)
        ).first()

        if enemy is not None:
            enemy.initiative = value
            session.add(enemy)
            session.commit()

        # TODO: Raise exception on error
