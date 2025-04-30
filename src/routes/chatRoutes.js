const express = require('express');
const Chat = require('../models/Chat');
const router = express.Router();

router.post('/', async (req, res) => {
  const chat = new Chat(req.body);
  await chat.save();
  res.send(chat);
});

router.get('/:sender/:receiver', async (req, res) => {
  const messages = await Chat.find({
    $or: [
      { sender: req.params.sender, receiver: req.params.receiver },
      { sender: req.params.receiver, receiver: req.params.sender }
    ]
  });
  res.send(messages);
});

module.exports = router;
