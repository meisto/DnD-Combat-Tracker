# author: meisto
# date: 2024-01-26 15:15:24
from typing import List, Optional
from logging import debug

from fastapi import APIRouter
from sqlmodel import Session, select

from sqlmodel import Session, select

from .interfaces import CharacterSelectionInformation
from schemes import engine, NonPlayerCharacterInstance, NonPlayerCharacter

enemy_router = APIRouter(prefix="/enemy")


@enemy_router.post("/generate_enemies")
def generate_enemies(charList: List[CharacterSelectionInformation]):
    with Session(engine) as session:
        for char in charList:
            enemy = session.exec(
                select(NonPlayerCharacter).where(NonPlayerCharacter.name == char.name)
            ).first()

            if enemy is None:
                debug(f"Error instanciating enemy '{char.name}'. Unknown enemy.")
                continue

            existing_instances = session.exec(
                select(NonPlayerCharacterInstance).where(
                    NonPlayerCharacterInstance.general_name == char.name
                )
            ).all()
            existing_instances = set(map(lambda x: x.name, existing_instances))

            # Generate a new name not yet in the database
            index = 1
            while True:
                name = char.name + f" {index}"
                if name not in existing_instances:
                    break

            for i in range(index, index + char.amount):
                session.add(
                    NonPlayerCharacterInstance(
                        name=f"{char.name} {i}",
                        general_name=char.name,
                        current_hit_points=enemy.max_hit_points,
                    )
                )

        session.commit()


@enemy_router.get("/all")
def get_all_enemies() -> List[NonPlayerCharacter]:
    with Session(engine) as session:
        return session.exec(select(NonPlayerCharacter)).all()


@enemy_router.get("/{name}")
def get_enemy(name: str) -> Optional[NonPlayerCharacter]:
    with Session(engine) as session:
        return session.exec(
            select(NonPlayerCharacter).where(NonPlayerCharacter.name == name)
        ).first()
