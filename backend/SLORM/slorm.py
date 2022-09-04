# this project
from .db.api import SlobyDB
from .utilities.exceptions import SelectError
from typing import List


class Slorm(SlobyDB):
    """
        Simple ORM class, that can handle every SQL command.
        SlobyDB child.
    """
    def __init__(self):
       super().__init__()

    def select(self, table_name: str = "", condition: str = "") -> List[str]:

        """
        Args:
            table_name("str"): Name of the table.
            condition: A simple sign(str) or statements, shows what data you need, it works like a filter, if the filter behavior appears in the tables, then you going to get them.
        """

        try:
            with self._conn_singleton() as conn:
                with conn.cursor() as cur:

                    cur.execute("""SELECT {0} FROM {1}""".format(condition, table_name))

                    selected_items = cur.fetchall()
                    return selected_items
        except:
           raise SelectError(condition, table_name)

    def insert(self, table_name: str = "", columns: List[str] = None, values: List[str] = None):
        """
        Args:
            table_name: The table name that you want to insert something.
            columns: These are the sql columns, where you can add something.
            values: It should be the values of the table.
        """
        if columns is None:
            columns = []
        if values is None:
            values = []

        command = """
            
        
                """

    def update(self, table_name: str = "", columns: List[str] | str = None, set_values: List[str] | str = None, condition: str = ""):
        """
            Args:
                table_name: Name of the table where you want to update something.
                columns: The columns that you want to modify.
                set_values: The values that you want to add to the columns.
                condition: A simple sign(str) or statements, shows what data you need, it works like a filter, if the filter behavior appears in the tables, then you going to get them.
        """

    def delete(self, table_name: str = "", condition: str = ""):
        """
            Args:
                 table_name: Name of the table where you want to delete something.
                 condition: A simple sign(str) or statements, shows what data you need, it works like a filter, if the filter behavior appears in the tables, then you going to get them.
        """

    def create_table(self,  tables: list[dict[str, str]]):
        """
            Args:
                tables: A list with dictionaries, that contain the name of the table and the data of the table.
        """

        pass



