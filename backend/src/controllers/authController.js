import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import Session from "../models/Session.js";
import admin from "../config/firebase.js";
import Otp from "../models/Otp.js"
import {transporter} from "../config/mailer.js"

const ACCESS_TOKEN_SECRET = "30m";
const REFRESH_TOKEN_TTL = 14 * 24 * 60 * 60; // 14 days in seconds

export const signUp = async (req, res) => {
    try {
        const { fullname, password, email, role, phone } = req.body;

        if (!fullname || !password || !email || !phone) {
            return res.status(400).json({
                message: "Missing required fields"
            });
        }

        //Check if the email exists 
        const duplicate = await User.findOne({ email })
        if (duplicate) {
            return res.status(409).json({ message: "Email already exists" });
        }

        //password encryption
        const hashedPassword = await bcrypt.hash(password, 10); // salt rounds = 10

        // role 
        let finalRole = "customer";

        if (role === "expert") {
            finalRole = "expert";
        }

        // phone 
        const phoneExists = await User.findOne({ phone });
        if (phoneExists) {
            return res.status(409).json({ message: "Phone already exists" });
        }

        // creat new user
        await User.create({
            fullname,
            hashedPassword,
            email,
            phone,
            role: finalRole,
            status: finalRole === "expert" ? "pending" : "active",
            isVerified: false
        });

        // generate 6 digit otp
        const otp = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        //delete existing otp 
        await Otp.deleteMany({email})

        //save new otp 
        await Otp.create({
            email,
            otp,
            expiresAt: new Date(Date.now()+5 * 60 * 1000),
        });

        //send mail 
        await transporter.sendMail({
           from: process.env.EMAIL_USER,
            to: email,
            subject: "Your OTP Code - IT Support Marketplace",
            html: `
                <h2>Chào mừng đến IT Support Marketplace!</h2>
                <p>Mã OTP xác thực tài khoản của bạn là:</p>
                <h1 style="font-size: 32px; color: #0050cb; font-weight: bold;">${otp}</h1>
                <p>Mã này sẽ hết hạn sau 5 phút.</p>
                <p>Nếu bạn không yêu cầu mã này, vui lòng bỏ qua email này.</p>
            `,
        });

        //return 
        return res.status(201).json({ message: "User created successfully. Please check your email for OTP." });
    } catch (error) {
        console.error("Error in signUp:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const signIn = async (req, res) => {
    try {
        // get inputs
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // compare hashedPassword from database with input password
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Email or password is incorrect" });
        }

        //check password
        const passwordCorrect = await bcrypt.compare(password, user.hashedPassword);
        if (!passwordCorrect) {
            return res.status(401).json({ message: "Email or password is incorrect" });
        }

        //check verify otp email
        if (!user.isVerified) {
            return res.status(403).json({
                message: "Please verify your email first"
            });
        }

        // if matched, generate accessToken using JWT
        const accessToken = jwt.sign(
            {
                userId: user._id,
                role: user.role,
                status: user.status
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );

        // generate refresh token
        const refreshToken = crypto.randomBytes(64).toString("hex");

        // create a new session to store the refresh token
        await Session.create({
            userId: user._id,
            refreshToken,
            expiresAt: new Date(Date.now() + REFRESH_TOKEN_TTL),
        })

        // send the refresh token back in a cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none", // deploy backend and frontend separately
            maxAge: REFRESH_TOKEN_TTL,
        });

        // return the access token in the response
        return res.json({ message: `User ${user.fullname} signed in successfully`, accessToken });

    } catch (error) {
        console.error("Error in signIn:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const signOut = async (req, res) => {
    try {
        /// get refresh token from cookie
        const token = req.cookies?.refreshToken;

        if (token) {
            // delete session with the refresh token
            await Session.deleteOne({ refreshToken: token });

            // clear cookie
            res.clearCookie("refreshToken");
        }
        return res.sendStatus(204);
    } catch (error) {
        console.error("Error in signOut:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const googleLogin = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        // verify Firebase token
        const decoded = await admin.auth().verifyIdToken(token);

        const { uid, email, name, picture } = decoded;

        // check user in MongoDB
        let user = await User.findOne({ email });

        // if not exist, create new user
        if (!user) {
            user = await User.create({
                fullname: name,
                email,
                phone: "N/A",
                role: "customer",
                status: "active",
                firebase_uid: uid,
                isVerified: true
            });
        }

        // create JWT to signIn
        const accessToken = jwt.sign(
            {
                userId: user._id,
                role: user.role,
                status: user.status
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );

        return res.json({
            message: "Google login success",
            accessToken,
            user
        });

    } catch (error) {
        console.error("Error in googleLogin:", error);
        return res.status(401).json({ message: "Invalid token" });
    }
};

export const sendOtp = async (req, res) =>{
    try {
        const {email} = req.body;

        if(!email){
            return res.status(400).json({
                message:"Email bắt buộc"
            })
        };

        // generate 6 digit otp
        const otp = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        //delete otp 
        await Otp.deleteMany({email})

        //save new otp 
        await Otp.create({
            email,
            otp,
            expiresAt: new Date(Date.now()+5 * 60 * 1000),
        });

        //send mail 
        await transporter.sendMail({
           from: process.env.EMAIL_USER,

            to: email,

            subject: "Your OTP Code",

            html: `
                <h2>IT Support Marketplace</h2>
                <p>Your OTP code is:</p>
                <h1>${otp}</h1>
                <p>This code expires in 5 minutes.</p>
            `,
        });

         return res.json({
            message: "Gửi  OTP thành công ",
        });

    } catch (error) {
        console.error("Error sendOtp:", error);

        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({
                message: "Email và OTP bắt buộc",
            });
        }

        // check otp in DB
        const existingOtp = await Otp.findOne({
            email,
            otp,
        });

        if (!existingOtp) {
            return res.status(400).json({
                message: "OTP không đúng",
            });
        }

        // check expired
        if (existingOtp.expiresAt < new Date()) {
            return res.status(400).json({
                message: "OTP đã hết hạn",
            });
        }

        // update user verified
        await User.findOneAndUpdate(
            { email },
            {
                isVerified: true,
            }
        );

        // delete otp for verify
        await Otp.deleteMany({ email });

        return res.status(200).json({
            message: "Verify OTP thành công",
        });

    } catch (error) {
        console.error("Error verifyOtp:", error);

        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export const resetPassword = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Missing required fields",
            });
        }

        // tìm user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        // hash password mới
        const hashedPassword = await bcrypt.hash(password, 10);

        // update password
        user.hashedPassword = hashedPassword;

        await user.save();

        return res.status(200).json({
            message: "Password reset successful",
        });

    } catch (error) {
        console.error("Reset password error:", error);

        return res.status(500).json({
            message: "Internal server error",
        });
    }
};