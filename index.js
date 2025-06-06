import Razorpay from "razorpay";
import app from "./app.js";
import dotenv from 'dotenv';
import connectDB from "./src/db/db config.js";
dotenv.config({path:'.env'})

const port =process.env.PORT||6000
export const instance = new Razorpay({
    key_id:process.env.ROZOPAY_API_KEY,
    key_secret:process.env.ROZOPAY_SECRET_KEY
})
connectDB();


app.listen(port,()=>{
console.log(`server is running ${port}`);

})

