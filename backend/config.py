# ======================================================================
# Author: meisto
# Creation Date: Thu 11 Jan 2024 12:47:59 AM CET
# Description: -
# ======================================================================
import os

from dotenv import load_dotenv
from pydantic import BaseModel


class AppConfiguration(BaseModel):
    HOST: str
    PORT: int
    SQLITE_URL: str


if os.path.isfile(".env"):
    load_dotenv(dotenv_path=".env")

Config = AppConfiguration(**os.environ)
