# ======================================================================
# Author: meisto
# Creation Date: Sun 14 Jan 2024 06:28:36 PM CET
# Description: -
# ======================================================================
import random


def getModifier(abilityScore: int) -> int:
    if abilityScore <= 1:
        return -5
    if abilityScore >= 30:
        return 10

    if 2 <= abilityScore and abilityScore <= 3:
        return -4
    if 4 <= abilityScore and abilityScore <= 5:
        return -3
    if 6 <= abilityScore and abilityScore <= 7:
        return -2
    if 8 <= abilityScore and abilityScore <= 9:
        return -1
    if 10 <= abilityScore and abilityScore <= 11:
        return 0
    if 12 <= abilityScore and abilityScore <= 13:
        return 1
    if 14 <= abilityScore and abilityScore <= 15:
        return 2
    if 16 <= abilityScore and abilityScore <= 17:
        return 3
    if 18 <= abilityScore and abilityScore <= 19:
        return 4
    if 20 <= abilityScore and abilityScore <= 21:
        return 5
    if 22 <= abilityScore and abilityScore <= 23:
        return 6
    if 24 <= abilityScore and abilityScore <= 25:
        return 7
    if 26 <= abilityScore and abilityScore <= 27:
        return 8
    if 28 <= abilityScore and abilityScore <= 29:
        return 9

    raise Exception()


def d20() -> int:
    return random.randint(1, 20)
