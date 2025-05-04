
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://ravipratihast71:9Ac4Kfk1EFnidc8E@cluster0.hkwcuwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/DBShoppingMart");
  } catch (err) {
    console.error('MongoDB connection error:', err);

  }
};

export default connectDB;
