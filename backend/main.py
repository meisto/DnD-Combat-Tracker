# ======================================================================
# Author: meisto
# Creation Date: Thu 11 Jan 2024 12:42:00 AM CET
# Description: -
# ======================================================================
import logging
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import uvicorn

from api import router as api_router
from config import Config
from src.models import set_up_database


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Lifespan functions for the app.
    """

    set_up_database()
    # Include router paths
    app.include_router(api_router)

    yield


app = FastAPI(lifespan=lifespan)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def main():
    """Main Function."""
    # logging.basicConfig(level=logging.DEBUG)
    uvicorn.run(
        app="main:app",
        host=Config.HOST,
        port=Config.PORT,
        log_level="info",
        reload=True,
    )


if __name__ == "__main__":
    main()
