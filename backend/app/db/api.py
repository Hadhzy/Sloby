# standard library imports
import logging
import random
from uuid import uuid4

# third party imports
from psycopg import Connection, connect, errors
from psycopg.rows import class_row

# this project

from app.db.db_config.config import config

logger = logging.getLogger("sloby.db")


class SlobyDB:
    def __init__(self, conf=None, tables: list[dict[str, str]] = None, drop: list = None, show_tables: bool = False):
        """Initialize database from config
        Args:
            tables list[dict[str, str]] = None: A list with dictionaries, that contain the name of the table and the data of the table.
            drop: list = None: The drop command going to start to run every single reload, if it contain a table then it is gonna drop it.
            show_tables: bool = False: if the show_tables is true then you going to get a message in the terminal about the tables(all)
        """

        if conf is None:
            self.conf = config()
        else:
            self.conf = conf

        if tables is None:
            self.tables = []
            logger.info("Empty table fields!!!")
        else:
            self.tables = tables

        if drop is None:
            self.drop = []
        else:
            self.drop = drop
        if self.conf['should_initialize_database']:
            self.__initiate_database()
        if show_tables:
            print(self.__get_tables())

    def __conn_singleton(self) -> Connection:
        conn = ""
        conf = self.conf
        try:
            conn = connect(
                host=conf['host'],
                dbname=conf['dbname'],
                user=conf['user'],
                password=conf['password'])
        except errors.ConnectionDoesNotExist as e:
            logger.exception(f'db connect failed {conf}')
            print(e)
        except errors.OperationalError as e:
            logger.exception(f'db connect failed {conf}')
            raise e
        return conn

    def __initiate_database(self) -> None:
        """
        Desc needed
        """
        with self.__conn_singleton() as conn:
            logger.info("Connecting to DB")
            with conn.cursor() as cur:  # get the cursor
                for dr in self.drop:
                    cur.execute(dr)

                for dict in self.tables:
                    for key, value in dict.items():
                        cur.execute(value)
                        logger.info(f"Added {key} table to DB.")
    def __exists_check(self, table: list[str]) -> bool:
        """
            Args:
                table: list[str]: Return true if the table exists return false if the table does not exists.
        """
        with self.__conn_singleton() as conn:
            with conn.cursor() as cur:
                pass
    def __get_tables(self) -> None:
        with self.__conn_singleton() as conn:
            with conn.cursor() as cur:
                cur.execute("""
                    SELECT
                        *
                    FROM
                    information_schema.tables
                """)
                cur.fetchall()
    def drop_the_tables(self):
        pass


api = SlobyDB()
