# standard library imports
import logging
import random
from uuid import uuid4

# third party imports
from psycopg import Connection, connect, errors
from psycopg.rows import class_row

# this project

from db_config.config import config
from utils.db_tables import create_answers_table
logger = logging.getLogger("sloby.db")


class SlobyDB:
    def __init__(self, conf=None, tables=None):
        """Initialize database from config
        :param conf: Optional, defaults to reading configuration from db/db_config/database.ini
        """
        if conf is None:
            self.conf = config()
        else:
            self.conf = conf

        if tables is None:
            self.tables = []
        else:
            self.tables = tables

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
                cur.execute("DROP TABLE IF EXISTS ANSWERS")
                cur.execute(create_answers_table)
                logger.info("Added `Answers` table to DB.")
    def drop_the_tables(self):
        pass
