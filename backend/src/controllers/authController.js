import bcrypt from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import Session from "../models/Session.js";

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
            status: finalRole === "expert" ? "pending" : "active"
        });

        //return 
        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error in signUp:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const signIn = async (req, res) => {
    try {
        // get inputs
        const { email, password } = req.body;
        console.log(req.body);
        
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

        // if matched, generate accessToken using JWT
        const accessToken = jwt.sign(
            {
                userId: user._id,
                role: user.role,
                fullname:user.fullname,
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