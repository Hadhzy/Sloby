from typing import List, Dict


TableName = str | List[Dict[str, str]]
TableColumns = List[str] | str
SetValues = List[str] | str
Condition = str
ShowTables = bool


from typing import TypedDict


class SlobyTable(TypedDict):
    table: TableName


class SlobyTables(TypedDict):
    pass
