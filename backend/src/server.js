import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/authRouter.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Public Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});


connectDB().then(() => {
    // Start server
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
});
