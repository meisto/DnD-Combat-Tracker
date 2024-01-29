# ======================================================================
# Author: meisto
# Creation Date: Sun 21 Jan 2024 07:12:33 PM CET
# Description: -
# ======================================================================
from fastapi import APIRouter

import src.db as db
import src.turn as turn

roundRouter = APIRouter(prefix="/round")


@roundRouter.post("/get_round")
def get_round() -> turn.Round:
    return []
