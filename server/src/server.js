'use strict';

const fs = require('node:fs');
const path = require('node:path');
const express = require('express');
const http = require('node:http');
const WebSocket = require('ws');
const { serviceEventEmitter } = require("./services/messages.js");
const { setupRouters } = require('./api/routers/routers.js');

const config = JSON.parse(
  fs.readFileSync(path.join(
    process.cwd(),
    'src/config/config.json'
  ))
);

const app = express();

app.use(express.json({ limit: config.maxRequestBodySize }));

// Have Node serve the files for our built React app
app.use(express.static(path.join(process.cwd(), 'client_files')));

// register all routers
setupRouters(app);

const server = http.createServer(app).listen(config.port, config.host);

const ws = new WebSocket.Server({ server });

ws.on('connection', (connection, req) => {
  const ip = req.socket.remoteAddress;
  // Here should be Logger instead of console.log
  console.log(`Connected ${ip}`);

  serviceEventEmitter.on('wsNotify', () => {
    for (const client of ws.clients) {
      if (client.readyState !== WebSocket.OPEN) continue;
      client.send('wsNotify', { binary: false });
    }
  })

  connection.on('close', () => {
    // Here should be Logger instead of console.log
    console.log(`Disconnected ${ip}`);
  });
});

process.on('uncaughtException', function (err) {
  // Here should be Logger instead of console.log
  console.log(err);
  process.exit(1);
});