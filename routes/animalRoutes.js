// Animal routes: connects URL paths to controller functions
// Defines endpoints for list, search, sort, and assign operations

const express = require('express');
// Create a new router instance
const router = express.Router();
// Route: GET /api/animals — return all animals
const { getAnimals, searchAnimals } = require('../controllers/animalController');

// Get all animals
// Route: GET /api/animals — return all animals
router.get('/', getAnimals);

// Search animals by prefix
// Route: GET /api/animals/search?prefix= — search by name prefix
router.get('/search', searchAnimals);

// Export router to be used in the main Express app
module.exports = router;


// Sort animals
// Route: GET /api/animals/sort?key=&algo= — sort animals by attribute
router.get('/sort', require('../controllers/animalController').sortAnimals);


// Assign rescue animal
// Route: GET /api/animals/assign — assign highest-priority animal
router.get('/assign', require('../controllers/animalController').assignRescueAnimal);
