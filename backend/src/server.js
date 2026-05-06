import express from "express";
import dotenv from "dotenv"
import authRoute from "./routes/authRoute.js";
import chattingRoute from "./routes/chattingRouter.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import { protectedRoute } from "./middlewares/authMiddleware.js";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Public Routes
app.use("/api/auth", authRoute);
app.use("/api/chat", chattingRoute);
// private routes
app.use(protectedRoute);

connectDB().then(() => {
    // Start server
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
});
