import express from "express";
import { googleLogin, resetPassword, sendOtp, signIn, signOut, signUp, verifyOtp } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", signOut);
router.post("/google", googleLogin);
router.post("/send-otp", sendOtp)
router.post("/verify-otp",verifyOtp)
router.post("/reset-password", resetPassword)
export default router;