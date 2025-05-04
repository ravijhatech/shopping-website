import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fullName:String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp:String,
  otpExpiry:String,
  resetToken: String,
  resetTokenExpiry: Date,
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
 
});

const User = mongoose.model('User', UserSchema);
export default User;
