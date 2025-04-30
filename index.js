const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/DataBaseChaating', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// MongoDB Schema
const Message = mongoose.model('Message', {
  sender: String,
  content: String,
  timestamp: { type: Date, default: Date.now }
});

// Socket.io events
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('sendMessage', async (msg) => {
    const savedMessage = new Message(msg);
    await savedMessage.save();
    io.emit('receiveMessage', savedMessage); // broadcast to everyone
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

