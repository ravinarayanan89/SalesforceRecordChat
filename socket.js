'use strict';
const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;

const wss = new WebSocket.Server({
    port: PORT
});


wss.on('connection', (ws) => {
  ws.on('message', function incoming(message) {
      wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                            client.send(message);
                }
      });

  });

  ws.on('close', () => console.log('Client disconnected'));


});

