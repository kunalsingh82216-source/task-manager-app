<<<<<<< HEAD
# Task Manager App

A full-stack task management application built with Node.js, Express, MongoDB on the backend and React on the frontend.

## Project Structure

```
task-manager-app/
├── backend/          # Express.js backend server
│   ├── config/       # Database configuration
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Custom middleware
│   ├── models/       # MongoDB schemas
│   ├── routes/       # API routes
│   ├── utils/        # Utility functions
│   ├── .env          # Environment variables
│   ├── server.js     # Server entry point
│   └── package.json  # Backend dependencies
│
├── frontend/         # React frontend application
│   ├── public/       # Static files
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API service layer
│   │   ├── App.js       # Main App component
│   │   ├── index.js     # Entry point
│   │   ├── App.css      # App styles
│   │   └── index.css    # Global styles
│   ├── package.json  # Frontend dependencies
│   └── package-lock.json
│
└── README.md         # This file
```

## Features

- **User Authentication**: Register and login functionality with JWT
- **Task Management**: Create, read, update, and delete tasks
- **Task Priorities**: Assign priority levels (low, medium, high) to tasks
- **Task Status**: Track task status (pending, in-progress, completed)
- **Due Dates**: Set and manage due dates for tasks
- **Role-Based Access**: User and admin roles
- **Responsive Design**: Mobile-friendly interface

## Backend Technologies

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **CORS**: Cross-Origin Resource Sharing
- **Morgan**: HTTP request logger

## Frontend Technologies

- **React**: JavaScript library for UI
- **React Router**: Client-side routing
- **Axios**: HTTP client
- **CSS3**: Styling

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env`:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   NODE_ENV=development
   ```

4. Start the server:
   ```bash
   npm run dev  # Development with nodemon
   npm start    # Production
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the API URL in `.env` or `src/services/api.js`:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will open at `http://localhost:3000`

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Task Routes (Protected)
- `GET /api/tasks` - Get all user tasks
- `GET /api/tasks/:id` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Usage

1. **Register**: Create a new account
2. **Login**: Sign in with your credentials
3. **Create Tasks**: Add new tasks with title, description, priority, and due date
4. **Manage Tasks**: Edit or delete existing tasks
5. **Track Status**: Update task status to track progress
6. **Logout**: Sign out when finished

## Future Enhancements

- Task categories/tags
- Task filtering and search
- Task sharing between users
- Notifications and reminders
- Task comments and collaboration
- Integration with calendar apps
- Mobile app version

## License

MIT

## Support

For issues and questions, please open an issue in the repository.
=======
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
>>>>>>> e3a1c27430329dfeab74b5347494d4837e772dd8
