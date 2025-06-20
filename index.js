// Entry point for the Rescue Animal microservice backend
// Sets up Express server with middleware and animal routes

const express = require('express');
const cors = require('cors');
// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
// Enable CORS to allow cross-origin requests
app.use(cors());
// Parse incoming JSON requests automatically
app.use(express.json());

// Routes
// Import and use animal-related routes
const animalRoutes = require('./routes/animalRoutes');
app.use('/api/animals', animalRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Rescue Animal Service running on port ${PORT}`);
});
