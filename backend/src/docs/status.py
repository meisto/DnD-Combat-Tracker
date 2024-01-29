# ======================================================================
# Author: meisto
# Creation Date: Sun 14 Jan 2024 09:56:36 PM CET
# Description: -
# ======================================================================
from typing import List, Optional

from pydantic import BaseModel


class StatusDescription(BaseModel):
    name: str
    nameGer: str
    ref: str
    desc: Optional[List[str]] = None


stunned = StatusDescription(name="stunned", nameGer="betäubt", ref="PH, pg. 290")
unconscious = StatusDescription(
    name="unconscious",
    nameGer="bewusstlos",
    ref="PH, pg. 290",
)
charmed = StatusDescription(name="charmed", nameGer="bezaubert", ref="PH, pg.290")
blinded = StatusDescription(name="charmed", nameGer="bezaubert", ref="PH, pg.290")
restrained = StatusDescription(name="restraint", nameGer="festgesetzt", ref="PH, pg.290")
paralyzed = StatusDescription(name="paralyzed", nameGer="gelähmt", ref="PH, pg.291")
grappled = StatusDescription(name="grappled", nameGer="gepackt", ref="PH, pg.291")
incapacitated = StatusDescription(name="incapacitated", nameGer="liegend", ref="PH, pg.291")
prone = StatusDescription(name="prone", nameGer="liegend", ref="PH, pg.291")
deafened = StatusDescription(name="deafened", nameGer="taub", ref="PH, pg.292")
invisible = StatusDescription(name="invisible", nameGer="unsichtbar", ref="PH, pg.292")
frightened = StatusDescription(name="frightened", nameGer="verängstigt", ref="PH, pg.292")
poisoned = StatusDescription(name="poisoned", nameGer="vergiftet", ref="PH, pg.292")
petrified = StatusDescription(name="petrified", nameGer="versteinert", ref="PH, pg.292")
