import WebSocket from 'ws';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Create a new WebSocket server
  const wss = new WebSocket.Server({ noServer: true });

  // Handle WebSocket connections
  wss.on('connection', (socket: WebSocket) => {
    console.log('Client connected');

    socket.on('message', (message: string) => {
      console.log(`Received message: ${message}`);

      // Echo the message back to the client
      socket.send(`You said: ${message}`);
    });

    // Send a greeting message to the client
    socket.send('Hello, client!');
  });

  // Upgrade the HTTP request to a WebSocket connection
  req.socket.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (socket) => {
      wss.emit('connection', socket, request);
    });
  });

  // Send an HTTP response to indicate that the upgrade was successful
  res.status(200).end();
}
