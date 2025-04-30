
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://ravipratihast71:tgFqicGvh13RKUj5@cluster0.hkwcuwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/shoppingMartDB");
    console.log('MongoDB connected sucess');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
