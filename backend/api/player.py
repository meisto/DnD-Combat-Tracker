# author: meisto
# date: 2024-01-26 15:15:22
from typing import List, Optional

from fastapi import APIRouter
from sqlmodel import Session, select

from schemes import engine, PlayerCharacter


player_router = APIRouter(prefix="/player")


#
# Getters
#
@player_router.get("/all")
def get_all_players() -> List[PlayerCharacter]:
    with Session(engine) as session:
        return session.exec(select(PlayerCharacter)).all()


@player_router.get("/{name}")
def get_player(name: str) -> Optional[PlayerCharacter]:
    with Session(engine) as session:
        return session.exec(select(PlayerCharacter).where(PlayerCharacter.name == name)).first()


#
# Setters
#
@player_router.put("/{name}/set_initiative")
def set_initiative(name: str, value: int = 0) -> None:
    print(name, value)
    with Session(engine) as session:
        player = session.exec(select(PlayerCharacter).where(PlayerCharacter.name == name)).first()

        if player is not None:
            player.initiative = value
            session.add(player)
            session.commit()


@player_router.put("/{name}/add_health")
def add_health(name: str, value: int = 0):
    with Session(engine) as session:
        player = session.exec(select(PlayerCharacter).where(PlayerCharacter.name == name)).first()

        if player is not None:
            player.hit_points = max(min(player.hit_points + value, player.max_hit_points), 0)

            session.add(player)
            session.commit()
