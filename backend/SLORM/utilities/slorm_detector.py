from SLORM.db.api import SlobyDB
from SLORM.utilities.custom_exceptions import SlormException
from typing import List


class SlormDetector(SlobyDB):
    def __init__(self, logger: bool = False):
        super().__init__()
        self.logger = logger
    """
    Args:
        logger: bool = False -> If you want to see these messages in the log file, you must use True, in other cases False. 
    """

    def insert_check(self, table_name: str = "", columns: List[str] = None, values: List[str] = None) -> bool:
        if len(columns) == len(values):
            for table_column in columns:
                if not self._exists_check(table_name, table_column):
                    return False
        else:
            if len(columns) > len(values):
                SlormException("test", f"There are more columns than values: {columns} :: {values}", self.logger)
            elif len(values) > len(columns):
                SlormException("test", f"There are more values than columns: {columns} :: {values}", self.logger)
        return True

    def update_check(self, table_name: str = "", columns: List[str] = None, values: List[str] = None):
        if len(columns) == len(values):
            for table_column in columns:
                if not self._exists_check(table_name, table_column):
                    return False
        return True

    def build_update_columns_values_connection(self, columns: List[str] = None, values: List[str] = None):
        pass