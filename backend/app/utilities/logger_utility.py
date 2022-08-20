import logging
from logging.handlers import RotatingFileHandler


class Logger:

    def __init__(self):
        self.get_logger()

    # noinspection PyMethodMayBeStatic
    def setup_logger(self):
        self.logger = logging.getLogger("sloby")
        self.logger.setLevel(logging.DEBUG)

    # noinspection PyMethodMayBeStatic
    def create_file(self):
        log_file = "sloby.log"
        ch = RotatingFileHandler(log_file, mode="a", maxBytes=5*1024*1024, backupCount=2, encoding=None, delay=False)
        # set the level
        ch.setLevel(logging.DEBUG)
        # create a formatter
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        # add formatter to ch
        ch.setFormatter(formatter)
        # add ch to logger
        self.logger.addHandler(ch)

    def get_logger(self):
        self.setup_logger()
        self.create_file()
        return self.logger