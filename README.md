# Yummit

A MERN-stack authentication prototype for the Yummit food and restaurant discovery platform.

## Setup

1. Install frontend dependencies
   ```bash
   cd frontend
   npm install
   ```
2. Install backend dependencies
   ```bash
   cd ../backend
   npm install
   ```
3. Copy `.env.example` to `.env` in the backend folder
   ```bash
   cp .env.example .env
   ```
4. Add the MongoDB connection string in `backend/.env`
   - Example: `MONGODB_URI=mongodb://127.0.0.1:27017/yummit`
5. Start the backend
   ```bash
   cd backend
   npm run dev
   ```
6. Start the frontend
   ```bash
   cd ../frontend
   npm run dev
   ```

## Local URLs

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000/api`

## Project structure

- `frontend/` - React + Vite application
- `backend/` - Express API with MongoDB, JWT authentication
