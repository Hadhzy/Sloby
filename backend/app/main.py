import sys
import json
from fastapi import Depends, FastAPI, Response, status, HTTPException, Depends, WebSocket
from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware

from utilities.logger_utility import Logger
from utilities.exceptions import WrongException
from serve import Serve

from db.api import SlobyDB

logger = Logger()
logger = logger.get_logger()

# db_tables

from db.utils.db_tables import CREATE_POST_DATA, CREATE_USER_DATA


def get_x():
    return 10


def get_y():
    return 10


class EndpointsManager:
    def __init__(self):
        pass


class CommonQueryParams:
    def __init__(self, q: str | None = None, skip: int = 0, limit: int = 100):
        self.q = q
        self.skip = skip
        self.limit = limit


end_pt = EndpointsManager()
app = FastAPI()
router = InferringRouter()  # Step 1: Create a router

origins = [
    "*"
]

app.add_middleware(GZipMiddleware)
app.add_middleware(CORSMiddleware,
                   allow_origins=['*'],
                   allow_credentials=True,
                   allow_methods=['*'],
                   allow_headers=['*'])

sloby_db = SlobyDB(tables=[{"USER_DATA": CREATE_USER_DATA}, {"POST_DATA": CREATE_POST_DATA}], show_tables=False)


@cbv(router)  # Step 2: Create and decorate a class to hold the endpoints
class Sloby:
    # Step 3: Add dependencies as class attributes
    x: int = Depends(get_x)

    def __str__(self):
        print("Sloby class")

    # noinspection PyMethodMayBeStatic
    def size_of(self, value):
        return sys.getsizeof(value)

    # noinspection PyMethodMayBeStatic
    @router.get("/test")
    def test(self):
        data = "test"

        return {"data": data}

    @router.websocket("/ws")
    async def ws(self, websocket: WebSocket):
        """ Handle all requests from frontend"""
        await websocket.accept()
        while True:
            try:
                data = await websocket.receive_text()
            except Exception as e:
                logger.info(f"receive_text failed: {e}")
                break
            logger.debug(f"quiz-received-data: {data}")


app.include_router(router)
