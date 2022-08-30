class SelectError(Exception):
    def __init__(self, condition, table_name):
        self.message = f"SelectError! The condition: {condition} is  wrong with this table: {table_name}"

        super().__init__(self.message)