import logging

logger_f = logging.getLogger("sloby.db")



class SelectError(Exception):
    def __init__(self, table_name, condition, logger: bool = True):
        self.message = f"SelectError! The condition: {condition} is  wrong with this table: {table_name}"
        if logger:
            self.logging_it()

        super().__init__(self.message)
    def logging_it(self) -> None:
        logger_f.info(self.message)


class InsertError(Exception):
    def __init__(self, table_name, columns, values, logger: bool = True):
        self.message = f"InsertError! The insert was unsuccessful with these columns: {columns} and these values: {values}, table: {table_name}"
        if logger:
            self.logging_it()
        super().__init__(self.message)

    def logging_it(self) -> None:
        logger_f.info(self.message)


class UpdateError(Exception):
    def __init__(self, table_name, columns, set_values, condition, logger: bool = True):
        self.message = f"UpdateError! The update was unsuccessful with this condition: {condition}, these columns {columns} - {set_values} in this {table_name} "
        if logger:
            self.logging_it()
        super().__init__(self.message)

    def logging_it(self) -> None:
        logger_f.info(self.message)


class DeleteError(Exception):
    def __init__(self, table_name, condition, logger: bool = True):
        self.message = f"DeleteError! The delete was unsuccessful from this table: {table_name} with this condition: {condition}"
        if logger:
            self.logging_it()
        super().__init__(self.message)

    def logging_it(self) -> None:
        logger_f.info(self.message)
