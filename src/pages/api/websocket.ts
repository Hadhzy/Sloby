import { NextRequest, NextResponse } from 'next/server';
import { WebSocketServer } from 'ws';

const SocketHandler = async (req: any, res: any) => {
  if (res.socket.server.wss) {
    console.log('Socket is already running');
  } else {
    console.log('Socket is initializing');
    const server = res.socket.server;
    const wss = new WebSocketServer({ noServer: true });
    res.socket.server.wss = wss;

    server.on('upgrade', (req: any, socket: any, head: any) => {
      console.log('upgrade', req.url);

      if (!req.url.includes('/_next/webpack-hmr')) {
        wss.handleUpgrade(req, socket, head, (ws) => {
          wss.emit('connection', ws, req);
        });
      }
    });

    wss.on('connection', (ws) => {
      console.log('connection', ws);
      ws.on('message', (data) => {
        console.log('received: %s', data);
      });

      ws.send('something');
    });
  }
  res.end();
};

export default SocketHandler;
