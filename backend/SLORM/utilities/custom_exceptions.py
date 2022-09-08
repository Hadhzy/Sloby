# standard library imports
import logging

logger_f = logging.getLogger("sloby.db")


class SlormException(Exception):
    def __init__(self, type, message, logger: False):
        self.message = f"{type}: {message}"
        if logger:
            self.logging_it()
        super().__init__(self.message)

    def logging_it(self):
        logger_f.info(self.message)

    def __str__(self):
        return "Custom exception!"

