import { instance } from "../../index.js"


export const processPayment = async (req, res) => {
    const options = {
        amount: req.body.amount * 100, 
        currency: "INR",
        receipt: "receipt_order_" + Date.now(),

    }
    const order = await instance.orders.create(options)
    res.status(200).json({
        sucess: true,
        order
    })
}

export const getkey = async (req, res) => {
    res.status(200).json({
        key: process.env.ROZOPAY_API_KEY
    })
}

export const paymentVerification = (req, res) => {
    const { razorpay_payment_id } = req.body;
    const body = razorpay_payment_id
    //const expectedSignature = crypto.createHmac("sha256",process.env.ROZOPAY_SECRET_KEY).update(body.toString()).digest("hex");
    //console.log(razorpay_payment_id);
    //const match = razorpay_payment_id===expectedSignature;
    if (body) {
        return res.redirect(`http://localhost:5173/paymentSucess?reference=${razorpay_payment_id}`)
    }
    else {
        res.status(404).json({
            sucess: false
        })
    }

    //    console.log(body);

}