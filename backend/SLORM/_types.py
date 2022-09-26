from typing import List, Dict, TypedDict, NewType


#Base types
TableName = str
TableColumns = List[str] | str
SetValues = List[str] | str
Condition = str
ShowTables = bool

#Custom types

sql_table = NewType("sql_table", str)


#TypeDicts
class SlobyTable(TypedDict):
    table_name: TableName
    table: sql_table



SlobyTables = List[SlobyTable]