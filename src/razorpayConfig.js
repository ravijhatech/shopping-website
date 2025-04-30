import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.ROZOPAY_API_KEY,
  key_secret: process.env.ROZOPAY_SECRET_KEY,
});

export default razorpay;
