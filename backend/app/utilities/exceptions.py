class WrongException(Exception):
    def __init__(self, message="Something went wrong, try again"):
        self.message = message
        super().__init__()
    def __str__(self):
        return {"error": self.message}