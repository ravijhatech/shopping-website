import Order from "../models/orderModel";
import razorpay from "../razorpayConfig";



export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // in paisa
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    const newOrder = new Order({
      razorpayOrderId: order.id,
      amount: amount,
    });
    await newOrder.save();

    res.status(200).json({ success: true, order });
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(500).json({ success: false, message: err.message });
  }
};
