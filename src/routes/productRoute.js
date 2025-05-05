import express from "express";
import { getkey, paymentVerification, processPayment } from "../controllers/productController.js";
import { getCart, addToCart, updateQuantity } from '../controllers/CartitemController.js';
import  {
  sendOtp,
  verifyOtp,
  register,
  login,
  logout,
  changePasswordByEmail,
  CheckLogedInUser,
  ResendOTP,
  GetUser,
} from '../controllers/authController.js';

import { FetchCard, uploadCard } from "../controllers/cardController.js";
import { upload } from "../services/cloudinary.js";

const router = express.Router();
router.route("/payment/process").post(processPayment);
router.route("/getkey").get(getkey);
router.route("/paymentVerification").post(paymentVerification);
router.route("/").get(getCart);
router.route("/add").post(addToCart);
router.route("/update").post(updateQuantity);


// auth routes
router.route("/send-otp").post(sendOtp);
router.route("/verify-otp").post(verifyOtp);
router.route("/reset-password").post(changePasswordByEmail);

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/check-user").get(CheckLogedInUser);
router.route("/resend-otp").post(ResendOTP);
router.route("/get-username").get(GetUser);
router.route("/").get(GetUser);


// image upload Cloudnary routes
router.post("/upload",upload.single('image'),uploadCard)
// router.route("/upload", upload.single('image')).post(uploadCard);

router.route("/fetchCard").get(FetchCard);
//FetchCard
export default router;
