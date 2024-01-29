# ======================================================================
# Author: meisto
# Creation Date: Thu 11 Jan 2024 12:50:00 AM CET
# Description: -
# ======================================================================
from fastapi import APIRouter

from .turns import roundRouter
from .player import player_router
from .enemy import enemy_router
from .enemy_instances import enemy_instance_router

router = APIRouter(prefix="/api")
router.include_router(roundRouter)
router.include_router(player_router)

enemy_router.include_router(enemy_instance_router)
router.include_router(enemy_router)
