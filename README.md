# task-manager-app
A Task Manager App application built with React.js Node.js , Express.js  and MongoDB featuring JWT authentication, CURD operation role  and Rest APIs  
# 🚀 Task Manager App

A full-stack Task Manager application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).  
This application provides secure JWT authentication, protected routes, CRUD operations for task management, role-based access, search & filtering, and scalable REST APIs.

---

# 📌 Features

## ✅ Authentication System
- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Authentication
- Protected Routes
- Logout Functionality

---

## ✅ Task Management
- Create Tasks
- Read Tasks
- Update Tasks
- Delete Tasks
- Task Status Toggle
- Search Tasks
- Filter Tasks

---

## ✅ Frontend Features
- React.js Frontend
- Responsive UI
- Dark Theme Dashboard
- Success/Error Notifications
- Protected Dashboard Access

---

## ✅ Backend Features
- RESTful APIs
- Express.js Backend
- MongoDB Database
- Mongoose Models
- API Error Handling
- Validation
- Role-Based Access
- JWT Security

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors
- nodemon

---

# 📂 Project Structure

```bash
task-manager-app/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

# 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/task-manager-app.git
```

---

# 2️⃣ Backend Setup

```bash
cd backend
npm install
```

---

# 3️⃣ Create .env File

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

# 4️⃣ Run Backend

```bash
npm run server
```

---

# 5️⃣ Frontend Setup

```bash
cd frontend
npm install
```

---

# 6️⃣ Run Frontend

```bash
npm start
```

---

# 🌐 API Base URL

```bash
http://localhost:5000/api
```

---

# 📘 API Documentation

# 🔐 Authentication APIs

---

## ✅ Register User

### Endpoint

```bash
POST /api/auth/register
```

### Request Body

```json
{
  "name": "Kunal",
  "email": "kunal@gmail.com",
  "password": "123456"
}
```

### Response

```json
{
  "_id": "USER_ID",
  "name": "Kunal",
  "email": "kunal@gmail.com",
  "role": "user",
  "token": "JWT_TOKEN"
}
```

---

## ✅ Login User

### Endpoint

```bash
POST /api/auth/login
```

### Request Body

```json
{
  "email": "kunal@gmail.com",
  "password": "123456"
}
```

### Response

```json
{
  "_id": "USER_ID",
  "name": "Kunal",
  "email": "kunal@gmail.com",
  "role": "user",
  "token": "JWT_TOKEN"
}
```

---

# 📋 Task APIs

---

## ✅ Get All Tasks

### Endpoint

```bash
GET /api/tasks
```

### Headers

```bash
Authorization: Bearer TOKEN
```

### Response

```json
[
  {
    "_id": "TASK_ID",
    "title": "Learn React",
    "description": "Complete MERN project",
    "status": "pending"
  }
]
```

---

## ✅ Create Task

### Endpoint

```bash
POST /api/tasks
```

### Headers

```bash
Authorization: Bearer TOKEN
```

### Request Body

```json
{
  "title": "Build Task Manager",
  "description": "Complete internship assignment"
}
```

### Response

```json
{
  "message": "Task created successfully"
}
```

---

## ✅ Update Task

### Endpoint

```bash
PUT /api/tasks/:id
```

### Headers

```bash
Authorization: Bearer TOKEN
```

### Request Body

```json
{
  "title": "Updated Task",
  "description": "Updated Description"
}
```

---

## ✅ Delete Task

### Endpoint

```bash
DELETE /api/tasks/:id
```

### Headers

```bash
Authorization: Bearer TOKEN
```

### Response

```json
{
  "message": "Task deleted successfully"
}
```

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcryptjs
- Protected Routes
- Validation & Error Handling
- Secure Token Storage
- Unauthorized Access Prevention

---

# 📈 Scalability Notes

This project follows a scalable MERN stack architecture.

### Future Improvements
- Redis Caching
- Docker Deployment
- Microservices Architecture
- API Rate Limiting
- Cloud Deployment
- Role-Based Admin Dashboard
- Real-time Notifications

---

# 🧪 Validation Features

- Empty field validation
- Password length validation
- Duplicate email validation
- Protected API access validation

---

# 📦 Installed Dependencies

## Backend Dependencies

```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
```

```bash
npm install --save-dev nodemon
```

---

## Frontend Dependencies

```bash
npm install react-router-dom axios
```

---

# 🚀 Deployment Ready

This project can be deployed using:
- Render
- Railway
- Vercel
- Netlify
- MongoDB Atlas

---

# 👨‍💻 Author

Kunal Singh

---

# ⭐ Internship Assignment Project

This project was developed as part of a Full Stack MERN Internship Assignment focusing on:
- REST APIs
- JWT Authentication
- CRUD Operations
- Secure Backend Development
- Frontend Integration
- Scalable Architecture
