import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  razorpayOrderId: String,
  razorpayPaymentId: String,
  amount: Number,
  isPaid: Boolean,
  createdAt: Date.now,
});

const Order = mongoose.model('Order', orderSchema);
export default Order;
