

const Razorpay = require("razorpay");

const razorpayInstance = new Razorpay({
    key_id:process.env.ROZOPAY_API_KEY,
    key_secret:process.env.ROZOPAY_SECRET_KEY
});

module.exports = razorpayInstance;