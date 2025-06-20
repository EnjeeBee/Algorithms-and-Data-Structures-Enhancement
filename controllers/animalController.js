// Load the mock animal data from local file
const { animals } = require('../data/animals');
// Import Trie structure for prefix-based search functionality
const Trie = require('../utils/Trie');

// Import Trie structure for prefix-based search functionality
const trie = new Trie();
animals.forEach(animal => trie.insert(animal.name.toLowerCase()));

// Get all animals
// Controller function: return all animal data as JSON
function getAnimals(req, res) {
    res.json(animals);
}

// Search by prefix
// Controller function: search for animal names starting with given prefix
function searchAnimals(req, res) {
    const { prefix } = req.query;
    const results = trie.startsWith(prefix.toLowerCase());
    res.json(results);
}

// Export all controller functions to use in routes
module.exports = { getAnimals, searchAnimals };


// Call appropriate sorting algorithm (merge or quick) on animal list
// Sort animals by query key using mergeSort or quickSort
// Call appropriate sorting algorithm (merge or quick) on animal list
const { mergeSort, quickSort } = require('../utils/sort');

// Controller function: sort animals by given attribute using selected algorithm
function sortAnimals(req, res) {
    const { key = 'age', algo = 'merge' } = req.query;
// Call appropriate sorting algorithm (merge or quick) on animal list
    const sorted = algo === 'quick' ? quickSort(animals, key) : mergeSort(animals, key);
    res.json({ sorted, algorithm: algo });
}

// Export all controller functions to use in routes
module.exports.sortAnimals = sortAnimals;


// Assign next animal for rescue task using a priority queue
// Import and use the custom MinHeap class for priority-based assignment
const MinHeap = require('../utils/PriorityQueue');

// Controller function: assign next rescue animal using min-heap (priority queue)
function assignRescueAnimal(req, res) {
// Import and use the custom MinHeap class for priority-based assignment
    const pq = new MinHeap();
    animals.forEach(a => pq.insert(a));
    const next = pq.extractMin();
    res.json({ assigned: next });
}

// Export all controller functions to use in routes
module.exports.assignRescueAnimal = assignRescueAnimal;
