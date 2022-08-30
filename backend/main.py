import sys
from fastapi import FastAPI, Depends, WebSocket
from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware

from utilities.logger_utility import Logger

from SLORM.db.api import SlobyDB

logger = Logger()
logger = logger.get_logger()

# this project
from SLORM.slorm import Slorm


# db_tables

from SLORM.db.utils.db_tables import CREATE_POST_DATA, CREATE_USER_DATA, CREATE_TEST_DATA


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

sloby_db = SlobyDB(tables=[{"USER_DATA": CREATE_USER_DATA}, {"POST_DATA": CREATE_POST_DATA}, {"TEST_DATA": CREATE_TEST_DATA}], show_tables=False)
slorm = Slorm()


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
    @router.get("/site-info")
    def site_info(self):
        data = "test"
        return {"data": data}

    @router.get("/categories")
    def categories(self):
        data = "test"

        return {"data": data}

    @router.get("/categories-accounts")
    def categories_accounts(self):
        data = "test"

        return {"data": data}

    @router.get("/settings-menu-titles")
    def settings_menu_titles(self):
        data = "test"

        return {"data": data}

    @router.get("/footer")
    def footer(self):
        data = "test"

        return {"data": data}

    @router.get("/users-login")
    def users_login(self):
        data = "test"

        return {"data": data}

    @router.get("/users-create-account")
    def users_create_account(self):
        data = "test"

        return {"data": data}

    @router.get("/sub-components-docs-about-us-goal-throw-a-message-community-our-project-content")
    def sub_components_docs_about_us_goal_throw_a_message_community_our_project_content(self):
        data = "test"

        return {"data": data}

    @router.get("/sub-components-help-forum-forum-and-security")
    def sub_components_help_forum_forum_and_security(self):
        data = "test"

        return {"data": data}

    @router.get("/sub-components-help-sub-components-help-content")
    def sub_components_help_sub_components_help_content(self):
        data = "test"

        return {"data": data}

    @router.get("/settings-menu")
    def settings_menu(self):
        data = "test"

        return {"data": data}

    @router.get("/sidebar-menu-items")
    def sidebar_menu_items(self):
        data = "test"

        return {"data": data}

    @router.get("/test-select")
    def test_select(self):
        data = slorm.select("test_data", "*")

        return {"data": "data"}

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
