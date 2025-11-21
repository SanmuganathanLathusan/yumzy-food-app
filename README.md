

# 🍔 Food Delivery App

A full-stack **MERN** food delivery application built using **React + Vite**, **Node.js**, **Express**, and **MongoDB Atlas**.
This project includes user authentication, cart handling, food listings, and backend API integration.

---

## 🚀 Tech Stack

### **Frontend (React + Vite)**

* React.js
* Vite
* Axios
* React Router
* Tailwind CSS / CSS Modules (optional)

### **Backend (Node + Express)**

* Express.js
* MongoDB Atlas
* Mongoose
* Bcrypt.js
* JWT Authentication
* CORS

---

## 📂 Project Structure

```
food-delivery-app/
│
├── client/              # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── services/
│   └── index.html
│
└── server/              # Express backend
    ├── routes/
    ├── models/
    ├── controllers/
    ├── server.js
    ├── .env
    └── config/db.js
```

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the repository**

```bash
git clone https://github.com/yourusername/food-delivery-app.git
cd food-delivery-app
```

---

## 🖥️ Frontend Setup (React + Vite)

### **Install dependencies**

```bash
cd client
npm install
```

### **Start development server**

```bash
npm run dev
```

### **Build for production**

```bash
npm run build
```

---

## 🛠️ Backend Setup (Node.js + Express)

### **Install dependencies**

```bash
cd server
npm install
```

### **Add environment variables (.env file)**

Create `.env` inside the **server** folder:

```
MONGO_URI=your-mongodb-atlas-url
JWT_SECRET=your-secret-key
PORT=5000
```

### **Run backend server**

```bash
npm start
```

Server runs at:
👉 [http://localhost:5000](http://localhost:5000)

---

## 🔗 API Endpoints

### **Auth**

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register user |
| POST   | `/api/auth/login`    | Login user    |

### **Food**

| Method | Endpoint     | Description          |
| ------ | ------------ | -------------------- |
| GET    | `/api/foods` | Get all foods        |
| POST   | `/api/foods` | Add new food (Admin) |

### **Cart**

| Method | Endpoint                   | Description      |
| ------ | -------------------------- | ---------------- |
| POST   | `/api/cart/add`            | Add item to cart |
| GET    | `/api/cart/:id`            | Get user's cart  |
| DELETE | `/api/cart/remove/:itemId` | Remove item      |

---

## 📝 Features

### Frontend

✔️ Modern UI with React
✔️ Food listing page
✔️ Add to cart
✔️ Login & Register
✔️ Cart page
✔️ Order summary

### Backend

✔️ Secure Authentication
✔️ JWT-based login
✔️ CRUD API for food items
✔️ MongoDB Atlas database
✔️ Cart handling logic

---
