from SLORM.db.api import SlobyDB
from typing import List


class SlormDetector(SlobyDB):
    def __init__(self):
        super().__init__()

    def insert_check(self, table_name: str = "", columns: List[str] = None, values: List[str] = None):
        if len(columns) == len(values):
            for table_column in columns:
                if not self._exists_check(table_name, table_column):
                    return False
        return True
    def update_check(self):
        pass