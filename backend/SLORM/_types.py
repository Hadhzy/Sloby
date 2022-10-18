from typing import List, Dict, TypedDict, NewType


#Custom types

sql_table = NewType("sql_table", str)

#Base types
TableName = str
TableColumns = List[str] | str
SetValues = List[str] | str
Condition = str
ShowTables = bool
NewTableAfterDatabaseInitialization = list[dict[TableName, sql_table]]


#TypeDicts
class SlobyTable(TypedDict):
    table_name: TableName
    table: sql_table



SlobyTables = List[SlobyTable]