# 🚀 IT Support Marketplace - Backend

Backend API for an AI-driven platform connecting clients with IT technicians.

---

# 🧱 Tech Stack

* 🟢 Node.js + Express
* 🍃 MongoDB + Mongoose
* 🔐 JWT Authentication
* ⚡ REST API
* 🌐 CORS + dotenv
* Node js 22.14.9

---

# 📁 Project Structure

```bash
src/
 ├── config/        # database & environment config
 ├── controllers/   # handle HTTP requests
 ├── services/      # business logic
 ├── models/        # mongoose schemas
 ├── routes/        # API route definitions
 ├── middlewares/   # auth, error handling
 ├── utils/         # helper functions

 ├── app.js         # express app setup
 └── server.js      # server entry point
```

---

# 🧩 Folder Details

## `config/`

* Database connection
* Environment configuration

---

## `controllers/`

* Receive requests from client
* Call services
* Return responses

---

## `services/`

* Contains business logic
* Independent from Express

---

## `models/`

* MongoDB schema definitions (Mongoose)

---

## `routes/`

* Map endpoints to controllers

---

## `middlewares/`

* Middleware logic:

  * Authentication (JWT)
  * Error handling

---

## `utils/`

* Helper / utility functions

---

# ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# 🔌 Database (MongoDB)

Using MongoDB with Mongoose

Config file:

```bash
src/config/db.js
```

---

# ▶️ Run Project

## 1. Install dependencies

```bash
npm install
```

## 2. Run development server

```bash
npm run dev
```

👉 Server runs at:

```bash
http://localhost:5000
```

---

# 📡 API Base URL

```bash
http://localhost:5000/api
```

---

# 🔐 Authentication (Planned)

* Register
* Login
* JWT-based authentication
* Role-based access (Client / Technician / Admin)

---

# 📅 Core Modules (Based on SRS)

* 👤 Auth (Users & Technicians)
* 📦 Booking System
* 💬 Realtime Chat
* 💳 Payment (Escrow)
* 🤖 AI Assistant
* 🛠 Admin Management

---

# 🚀 Development Guidelines

* Keep separation of concerns:

  * Controllers → handle requests
  * Services → business logic
* Avoid business logic inside controllers
* Keep routes clean and minimal

---

# 🔥 Future Improvements

* Socket.io (Realtime chat)
* Redis (Pub/Sub)
* Queue system (BullMQ for AI scraping)
* Validation (Joi / Zod)
* Logging (Winston)

---

# 👨‍💻 Author

IT Support Marketplace Team
