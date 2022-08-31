class SelectError(Exception):
    def __init__(self,table_name, condition):
        self.message = f"SelectError! The condition: {condition} is  wrong with this table: {table_name}"

        super().__init__(self.message)


class InsertError(Exception):
    def __init__(self, table_name, columns, values):
        self.message = f"InsertError! The insert was unsuccessful with these columns: {columns} and these values: {values}, table: {table_name}"
        super().__init__(self.message)


class UpdateError(Exception):
    def __init__(self, table_name, columns, set_values, condition):
        self.message = f"UpdateError! The update was unsuccessful with this condition: {condition}, these columns {columns} - {set_values} in this {table_name} "
        super().__init__(self.message)


class DeleteError(Exception):
    def __init__(self, table_name, condition):
        self.message = f"DeleteError! The delete was unsuccessful from this table: {table_name} with this condition: {condition}"
        super().__init__(self.message)

