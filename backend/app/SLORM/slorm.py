from typing import List


class Slorm:
    """
        Simple ORM class, that can handle every SQL command.
    """
    def __init__(self):
       pass

    def select(self, table_name: str = "", statements: str = "") -> List[str]:
        """
        Args:
            table_name("str"): Name of the table
            statements: A simple sign(str) or a statements, it show what data do you need, it is works like a filter, if the filer behavior is appear in the tables, then you going to get them.
        """
        pass

    def insert(self):
        pass

    def update(self):
        pass

    def delete(self):
        pass

    def create_table(self):
        pass



