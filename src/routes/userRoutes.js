const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

router.get('/match/:id', async (req, res) => {
  const currentUser = await User.findById(req.params.id);
  const matches = await User.find({
    gender: currentUser.preferences.gender,
    religion: currentUser.preferences.religion,
    location: currentUser.preferences.location,
    _id: { $ne: currentUser._id }
  });
  res.send(matches);
});

module.exports = router;
