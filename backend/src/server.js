import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import chattingRoute from "./routes/chattingRouter.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import { protectedRoute } from "./middlewares/authMiddleware.js";
import dns from "dns";
import cors from "cors";
import { Server } from "socket.io";

dns.setDefaultResultOrder("ipv4first");
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

// Public Routes
app.use("/api/auth", authRoute);
app.use("/api/chat", chattingRoute);
// private routes
// app.use(protectedRoute);
const PORT = process.env.PORT || 5001;

// express server
const expressServer = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Connect MongoDb
connectDB();

// socket.io — chạy chung port với express, KHÔNG cần io.listen() riêng
const io = new Server(expressServer, {
  cors: { origin: process.env.CLIENT_URL, credentials: true },
});

let usersOnline = [];

io.on("connection", (socket) => {
  console.log("Connect socket.io success: ", socket.id);

  // Đăng ký user online
  socket.on("addNewUser", (userId) => {
    try {
      if (!userId) return;

      // Nếu user đã online ở socket khác (vd reload, mở tab mới) -> cập nhật socketId mới
      const existing = usersOnline.find((u) => u.userId === userId);
      
      if (existing) {
        existing.socketId = socket.id;
      } else {
        usersOnline.push({ userId, socketId: socket.id });
      }

      io.emit("getUsersOnline", usersOnline);
      console.log("Online: ",usersOnline);
      
    } catch (error) {
      console.log("Error when add user online: ", error);
    }
  });

  // Nhận tin nhắn từ client, relay tới người nhận (và người gửi, để đồng bộ nhiều tab)
  socket.on("sendMessage", (message) => {
    try {
      console.log("Message: ",message);
      
      const recipient = usersOnline.find(
        (u) => u.userId === message.recipient,
      );
      const sender = usersOnline.find(
        (u) => u.userId === message.sender,
      );
      console.log("Rep: ",recipient);
      console.log("Sender: ",sender);
      
      
      if (recipient) {
        io.to(recipient.socketId).emit("getMessages", message);
      }

      // Emit lại cho chính người gửi (trừ socket hiện tại) để đồng bộ nếu họ mở nhiều tab
      if (sender && sender.socketId !== socket.id) {
        io.to(sender.socketId).emit("getMessages", message);
      }
    } catch (error) {
      console.log("Error when sending message: ", error);
    }
  });

  // Xử lý disconnect — PHẢI nằm trong "connection", dùng socket.on, không phải io.on
  socket.on("disconnect", () => {
    console.log("Disconnect: ", socket.id);
    usersOnline = usersOnline.filter((u) => u.socketId !== socket.id);
    io.emit("getUsersOnline", usersOnline);
  });
});