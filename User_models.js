const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: String,
  isOnline: { type: Boolean, default: false }
});
module.exports = mongoose.model('User', userSchema);