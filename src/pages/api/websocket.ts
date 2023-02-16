import { NextApiRequest, NextApiResponse } from 'next';
import { WebSocketServer } from 'ws';

const SocketHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const wss: any = new WebSocketServer({ noServer: true });

  // Set up the WebSocket server
  wss.on('connection', (ws: any) => {
    console.log('Client connected');

    // Listen for messages from the client
    ws.on('message', (message: any) => {
      console.log(`Received message: ${message}`);

      // Send a response back to the client
      ws.send(`You said: ${message}`);
    });

    // Listen for the socket to close
    ws.on('close', () => {
      console.log('Client disconnected');
    });
  });

  // Upgrade the incoming request to a WebSocket request
  if (!wss.handleUpgrade(req, res.socket, Buffer.from([]), onUpgrade)) {
    res.status(400).end('Invalid WebSocket request');
    return;
  }

  function onUpgrade(ws: any) {
    wss.emit('connection', ws, req);
  }
};

export default SocketHandler;
