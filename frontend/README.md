# 🚀 IT Support Marketplace - Frontend

Frontend của nền tảng kết nối khách hàng với kỹ thuật viên IT (AI-driven support platform)

---

# 🧱 Tech Stack

* ⚡ Vite
* ⚛️ React + TypeScript (9.0.6)
* 🎨 Tailwind CSS(3.4.3)
* 🔌 REST API
*     Node js 22.14.9

---

# 📁 Project Structure

```bash
src/
 ├── assets/        # images, icons, fonts
 ├── components/    # reusable UI components
 ├── layouts/       # layout (navbar, footer)
 ├── pages/         # application screens
 ├── services/      # API calls / business logic
 ├── hooks/         # custom React hooks
 ├── types/         # TypeScript types/interfaces

 ├── App.tsx        # root component
 ├── main.tsx       # entry point
 └── index.css      # global styles (Tailwind)
```

---

# 🧩 Folder Details

## `assets/`

Static resources:

* images
* icons
* fonts

---

## `components/`

Reusable UI components

Example:

* Button
* Card
* Input

---

## `layouts/`

App layout structure

Example:

* MainLayout (Navbar + Footer)

---

## `pages/`

Main screens (mapped with routes)

Example:

* Home
* Booking
* Chat

---

## `services/`

Handle API calls & business logic

Example:

* auth.service.ts
* booking.service.ts

---

## `hooks/`

Custom reusable logic

Example:

* useAuth
* useChat

---

## `types/`

TypeScript models & interfaces

Example:

* user.type.ts
* booking.type.ts

---

# ⚙️ Setup & Run

## 1. Install dependencies

```bash
npm install
```

## 2. Run project

```bash
npm run dev
```

👉 App chạy tại:

```bash
http://localhost:5173
```

---

# 🎨 Tailwind CSS

Config nằm tại:

* `tailwind.config.js`
* `postcss.config.js`

Global styles:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# 🔥 Development Rules

* Folder dùng **lowercase**
* Component dùng **PascalCase**
* Tách rõ:

  * UI → `components`
  * Logic → `hooks`, `services`
  * Page → `pages`

---

# 🚀 Future Improvements

* 🔐 Authentication UI
* 💬 Realtime Chat (Socket.io)
* 📅 Booking System UI
* 🤖 AI Chatbot integration

---

# 👨‍💻 Author

IT Support Marketplace Team
