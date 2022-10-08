from fastapi import WebSocket
from typing import List


class ConnectionManager:
    """Handling the websocket events. (connect, broadcast, disconnect)"""

    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()  # accept the connection
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket) -> None:
        """Remove a connection from the list of active connections."""
        self.active_connections.remove(websocket)

    async def broadcast(self):
        """Broadcast a message to all active connections."""