import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectedRoute = async (req, res, next) => {
    try {
        // get token from header
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];// Bearer <token>
        if (!token) {
            return res.status(401).json({ message: 'Access token not found' });
        }

        // verify token validity
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decodedUser) => {
            if (err) {
                console.log(err);
                return res
                    .status(403)
                    .json({ message: 'Access token is expired or invalid' });
            }

            // find user 
            const user = await User.findById(decodedUser.userId).select("-hashedPassword");
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            if (user.status === "banned") {
                return res.status(403).json({ message: "User is banned" });
            }
            // return user data to req object
            req.user = {
                id: user._id,
                fullname: user.fullname,
                role: user.role,
                status: user.status
            };
            next();
        });


    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
};