
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://ravipratihast71:jPoRfADyx0J54rU3@cluster0.hkwcuwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/ApnaShppongMart");
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;
