from SLORM.db.api import SlobyDB
from SLORM.utilities.custom_exceptions import SlormException


# _types
from SLORM._types import TableName, TableColumns, SetValues, Condition


class SlormDetector(SlobyDB):
    def __init__(self, logger: bool = False):
        super().__init__()
        self.logger = logger

    """
    Args:
        logger: bool = False -> If you want to see these messages in the log file, you must use True, in other cases False. 
    """

    def insert_check(self, table_name: TableName = "", columns: TableColumns = None, values: SetValues = None) -> bool:
        if len(columns) == len(values):
            for table_column in columns:
                if not self._exists_check(table_name, table_column):
                    return False
        else:
            if len(columns) > len(values):
                SlormException("test", f"There are more columns than values: {columns} :: {values} or not valid", self.logger)
            elif len(values) > len(columns):
                SlormException("test", f"There are more values than columns: {columns} :: {values} or not valid", self.logger)
        return True

    def update_check(self, table_name: TableName = "", columns: TableColumns = None, values: SetValues = None):
        if len(columns) == len(values):
            for table_column in columns:
                if not self._exists_check(table_name, table_column):
                    return False
        else:
            SlormException("test", "It should be a list, and both columns and values should have the same length", self.logger)
        return True

    # noinspection PyMethodMayBeStatic
    def build_update_columns_values_connection(self, columns: TableColumns = None, values: SetValues = None):
        formatted_string = ""
        columns_counter = 0
        for column in columns:
            for value in values:
                columns_counter += 1
                formatted_string += f"{column}='{value}' {',' if columns_counter != len(columns) else ''}"

        return formatted_string


    def delete_check(self, table_name: TableName, condition: Condition = ""):
        if not self._exists_check(table_name)[0]:
            SlormException("type", "You should pass out a valid table name ->  --delete_check-- ", self.logger)
        return True