# Fullstack Todo Application

This is a simple Todo application built with Next.js (frontend) and NestJS (backend), using MySQL as the database.

## Setup Instructions

Follow these steps to get the application running locally:

### Prerequisites

- Node.js (version >= 18 recommended)
- npm
- MySQL server installed and running

### Backend Setup (NestJS)

1.  Navigate to the backend directory:
    cd nest-todo-backend

2.  Install dependencies:
    npm install

3.  Create a `.env` file in the `todo-backend` directory and configure your MySQL database connection:
    .env
    DATABASE_HOST=localhost
    DATABASE_PORT=3306
    DATABASE_USERNAME=your_mysql_username
    DATABASE_PASSWORD=your_mysql_password
    DATABASE_NAME=todo_app
4.  ensure your database schema is created manually


    ```

5.  Start the backend server:
    npm run start:dev
    The backend should be running on `http://localhost:3000/`.

### Frontend Setup (Next.js)

1.  Navigate to the frontend directory:
    cd ../todo-frontend
    ```

    ```
2.  Install dependencies:
    npm install

3.  Start the frontend development server:
    npm run dev

    The frontend should be running on `http://localhost:3001`.

### DataBase

1. make sure you have created a database todo_db

### Running the Application

1.  Ensure both the backend and frontend development servers are running.
2.  Open your browser and navigate to the frontend URL (usually `http://localhost:3001`).
3.  You should be able to add, remove, and list tasks.
