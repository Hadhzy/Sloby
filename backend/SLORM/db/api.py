# standard library imports
import logging
# third party imports
from psycopg import Connection, connect, errors
from typing import List

# this project
from SLORM._types import TableName, TableColumns, SetValues, Condition, ShowTables

from .db_config.config import config

logger = logging.getLogger("sloby.db")


class SlobyDB:
    def __init__(self, conf=None, tables: TableName = None, show_tables: ShowTables = False):
        """Initialize database from config
        Args:
            tables list[dict[str, str]] = None: A list with dictionaries, that contain the name of the table and the data of the table.
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

        if self.conf['should_initialize_database']:
            self.__initiate_database()
        if show_tables:
            logger.info(self._get_all_tables())

    def _conn_singleton(self) -> Connection:
        self.conn = ""
        conf = self.conf
        try:
            self.conn = connect(
                host=conf['host'],
                dbname=conf['dbname'],
                user=conf['user'],
                password=conf['password'])
        except errors.ConnectionDoesNotExist as e:
            logger.exception(f'db connect failed {conf}')
            raise e
        except errors.OperationalError as e:
            logger.exception(f'db connect failed {conf}')
            raise e
        return self.conn

    def __initiate_database(self) -> None:
        """
        Database initialization, add the tables or drop it.
        """
        with self._conn_singleton() as conn:
            logger.info("Connecting to DB")
            with conn.cursor() as cur:  # get the cursor
                for dict in self.tables:
                    exists = self._exists_check(dict) # get the list of the exists

                    for key, value in dict.items():
                        if exists[0]:
                            logger.info(f"This table {key} already exists.")
                        else:
                            cur.execute(value)
                            logger.info(f"Added {key} table to the DB.")



    def _exists_check(self, table: TableName, column: TableColumns = "") -> list:
        """
            Args:
                table: dict[str, str]:  Dict(key-> name of the table, value-> "table").
                column: str : it should be the name of the column, that you want to check
            Returns:
                A List with the exists values.
                exists[0] -> table
                exists[1] -> column
        """

        column_exists = None

        with self._conn_singleton() as conn:
            with conn.cursor() as cur:

                #  check if the type is a dict
                if type(table) is dict:
                    name = self.__get_table_name(table)
                # or str
                else:
                    name = table
                    # check the column is a valid data

                if column:
                    cur.execute(""" SELECT * FROM information_schema.columns WHERE table_name = %(table_name)s and column_name = %(column_name)s """, {"table_name": table, "column_name": column})

                    column_fetch = cur.fetchone()
                    column_exists = column_fetch[0]

                cur.execute("""
                SELECT EXISTS(
                SELECT FROM
                    pg_tables
                WHERE 
                     schemaname = 'public' AND
                     tablename = (%(name)s)
                     )
                    """, {"name": str(name).lower()}
                        )
                table_fetch = cur.fetchone()
                table_exists = table_fetch[0]
                return [table_exists, column_exists]

    def _get_all_tables(self) -> List:
        """
            Get all of the tables in the DB.
        """
        with self._conn_singleton() as conn:
            with conn.cursor() as cur:
                cur.execute("""
                    SELECT
                        *
                    FROM
                    information_schema.tables
                """)
                return cur.fetchall()

    # noinspection PyMethodMayBeStatic
    def __get_table_name(self, table: TableName) -> str:
        """
            ARGS:
                table: dict[str, str]:dict(key-> name of the table, value-> "table").
            RETURNS:
                str: The Name of the table
        """

        for key, value in table.items():
            return str(key)

    def handle_slorm(self):
        pass


api = SlobyDB()
