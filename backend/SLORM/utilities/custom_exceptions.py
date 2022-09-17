# standard library imports
import logging

logger_f = logging.getLogger("sloby.db")


class SlormException(Exception):
    def __init__(self, message, logger: bool = True):
        print("logger:", logger)
        self.message = f"{type}: {message}"
        if logger:
            self.logging_it()
        super().__init__(self.message)

    def logging_it(self):
        print("run it")
        logger_f.info(self.message)

    def __str__(self):
        return "Custom exception!"
