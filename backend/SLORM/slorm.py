# this project
from sqlalchemy.dialects.mssql.information_schema import columns

from SLORM.db.api import SlobyDB
from SLORM.utilities.slorm_detector import SlormDetector
from SLORM.utilities.custom_exceptions import SlormException
# types
from SLORM._types import TableName, TableColumns, SetValues, Condition, NewTableAfterDatabaseInitialization

# errors
from SLORM.utilities.exceptions import SelectError, InsertError, UpdateError, DeleteError
from typing import List


# third party libraries
from collections.abc import Sequence

slorm_detector = SlormDetector(logger=True)



class Slorm(SlobyDB):
    """
        Simple ORM class, that can handle every SQL command.
        SlobyDB child.
    """
    def __init__(self):
       super().__init__()

    def select(self, table_name: TableName = "", condition: Condition = "") -> Sequence[List]:

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
           raise SelectError(table_name, condition)

    def insert(self, table_name: TableName = "", table_columns: Sequence[TableColumns] = None, values: Sequence[SetValues] = None) -> Sequence[List]:
        """
        Args:
            table_name: The table(name) where you want to insert something. It also can be a dictionary, that you defined in the SlobyAPI constructor.
            table_columns: These are the sql columns, where you can add something.
            values: It should be the values of the table.
        """

        table_columns = table_columns or []
        values = values or []


        try:
            with self._conn_singleton() as conn:
                with conn.cursor() as cur:
                    if slorm_detector.insert_check(table_name, table_columns, values):
                        cur.execute(
                            "INSERT INTO {0} ({1}) VALUES ({2})".format(
                                table_name, ', '.join(table_columns), ", ".join(["%s"] * len(values))
                            ),
                            values
                        )

                        inserted_data = self.select(table_name=table_name, condition="*")
                        return inserted_data
                    else:
                        raise SlormException("The insert check was unsuccessful")

        except:
            raise InsertError(table_name=table_name, columns=table_columns, values=values)
    def update(self, table_name: TableName = "", table_columns: Sequence[TableColumns] = None, set_values: Sequence[SetValues] = None, condition: Condition = "") -> Sequence[List]:
        """
            Args:
                table_name: Name of the table where you want to update something.
                table_columns: The columns that you want to modify.
                set_values: The values that you want to add to the columns.
                condition: A simple sign(str) or statements, shows what data you need, it works like a filter, if the filter behavior appears in the tables, then you going to get them.
        """

        try:
            with self._conn_singleton() as conn:
                with conn.cursor() as cur:
                    pass
                    if slorm_detector.update_check(table_name, table_columns, set_values):
                        columns_values = slorm_detector.build_update_columns_values_connection(table_columns, set_values)

                        cur.execute("""UPDATE {table_name} SET {columns_values} WHERE {condition}""".format(table_name=table_name, columns_values=columns_values, condition=condition))
                        #save the changes
                        conn.commit()

                        updated_data = self.select(table_name=table_name, condition="*")
                        return updated_data
                    else:
                        raise SlormException(f"The update was unsuccessful(slorm.detcector.update_check) with these params: table_name:{table_name}, table_columns{table_columns} set_values: {set_values}")
        except:
            raise UpdateError(table_name, columns, set_values, condition)

    def delete(self, table_name: TableName = "", condition: Condition = ""):
        """
            Args:
                 table_name: Name of the table where you want to delete something.
                 condition: A simple sign(str) or statements, shows what data you need, it works like a filter, if the filter behavior appears in the tables, then you going to get them.
        """

        try:
            with self._conn_singleton() as conn:
                with conn.cursor() as cur:
                    if slorm_detector.delete_check(table_name):
                        if not condition:
                            cur.execute("""DROP TABLE {table_name}""".format(table_name=table_name))
                        else:
                            cur.execute("""DELETE FROM {table_name} WHERE {condition}""".format(table_name=table_name, condition=condition))


                        conn.commit()

                        deleted_data = self.select(table_name, condition="*")
                        return deleted_data
                    else:
                        SlormException(f"The delete was unsuccessful(delete_check) with these params: table_name{table_name} condition{condition}")
        except:
            raise DeleteError(table_name, condition)

    def create_table(self,  table: NewTableAfterDatabaseInitialization):
        """
            Args:
                table: A sloby table, that contain the name of the table and the data of the table.
        """

        created_table = self.create_table_after_db_initiate(table)
        return created_table

