const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const router = require('./routes/projectRoutes');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

// Load Environment variables
dotenv.config();

//Initialize express
const app = express();

//Connect to MongoDB
connectDB();

mongoose.connection.on('connected', () => {
    console.log(`✅MongoDB Connected to: ${mongoose.connection.name}`)
})

mongoose.connection.on('error', (err) => {
    console.log(`❌ MongoDB Errpr: ${err}`)
})

//Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
}));

//Body parsers
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many request from this IP. Please continue after 15 mins"
});
app.use('/api/', limiter);

// Routes
app.use('/api/projects', router);

// Health check
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running'
    });
});

// Root route
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Portfolio API',
        version: '1.0.0'
    });
})

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);

    //Set status code based on error type
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && {stack: err.stack})
    });
})

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})//test
