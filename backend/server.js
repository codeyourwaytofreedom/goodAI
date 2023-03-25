const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: [
     "http://localhost:3000"],
    methods: ["GET", "POST"]
  }
});
  
const min = 1;
const max = 2.75;
console.log(8)

app.use(cors({ origin: true, credentials: true }));

io.on('connection', (socket) => {
  console.log('connected');

  // when scaling index requested
  socket.on('request_scaling_index', () => {
    const random_scaling_index = Math.random() * (max - min) + min;
    io.emit('scaling_index', random_scaling_index);
  });
});

server.listen(80, () => {
  console.log('listening on 80');
});