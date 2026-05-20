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
