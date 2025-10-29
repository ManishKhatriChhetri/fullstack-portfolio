# My Personal Portfolio Project
Full Stack portfolio built with React, Node.js, and MongoDB.

## Live Demo
**[mkcbc.com](https://www.mkcbc.com)**

## Tech Stack
- **Frontend**: React + Material UI (Deployed in Vercel)
- **Backend**: Node.js + Express (Deployed in Render)
- **Database**: MongoDB Atlas

## Installation

### Prerequisites
- Node.js (v18+)
- MongoDB account
- Git

### Clone & Install
```bash
git clone https://github.com/ManishKhatriChhetri/fullstack-portfolio.git
cd fullstack-portfolio

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

```

### Environment Variables

***Backend (.env):**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_uri
CLIENT_URL=http://localhost:5173
```

***Frontend (.env):**
```env
VITE_API_URL=http://localhost:5000/api
```

### Run Locally
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## Deployment

### Backend (Render)
1. Create Web Service on Render
2. Connect GitHub repo
3. Set environment variables
4. Deploy automatically on push to main

### Frontend (Vercel)
1. Import project from GitHub
2. Set `VITE_API_URL` in environment variables
3. Deploy automatically on push to main

## Features
- Responsive design
- Project showcase using backend API connecting to MongoDB
- New features (coming soon...)

**Live Site:** [mkcbc.com](https://mkcbc.com)
