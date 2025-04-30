// models/Image.js
import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  title: String,
  price:String,
  des: String,
  url: String,
  public_id: String,
});

export default mongoose.model('Image', imageSchema);
