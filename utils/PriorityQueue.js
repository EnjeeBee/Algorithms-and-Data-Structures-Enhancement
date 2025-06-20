// Priority Queue for rescue animal assignment based on trainingStatus priority
// Implements a MinHeap where 'Completed' is highest priority (lowest value)

// Priority Queue implementation using a MinHeap for rescue assignments

// MinHeap class to manage rescue animal assignments by training priority
// MinHeap class manages insertion and extraction of priority elements
class MinHeap {
    // Initialize an empty array-based heap
    constructor() {
        this.heap = [];
    }

    // Add a new animal to the heap and rebalance
// Insert a new animal into the heap and maintain heap structure
    insert(animal) {
        this.heap.push(animal);
// Ensure min-heap property by moving the element up
        this.bubbleUp();
    }

    // Ensure the heap property is maintained after insertion
// Ensure min-heap property by moving the element up
    bubbleUp() {
        let idx = this.heap.length - 1;
        const current = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (this.priority(current) >= this.priority(parent)) break;
            this.heap[parentIdx] = current;
            this.heap[idx] = parent;
            idx = parentIdx;
        }
    }

    // Remove and return the highest-priority animal (min-heap root)
// Remove and return the highest-priority (lowest value) element
    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
// Restore heap property by moving the root element down as needed
            this.sinkDown(0);
        }
        return min;
    }

    // Restore heap order by sinking down swapped root element
// Restore heap property by moving the root element down as needed
    sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let swap = null;

            if (left < length) {
                if (this.priority(this.heap[left]) < this.priority(element)) {
                    swap = left;
                }
            }

            if (right < length) {
                if (
                    this.priority(this.heap[right]) < 
                    (swap === null ? this.priority(element) : this.priority(this.heap[left]))
                ) {
                    swap = right;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    // Define priority values: Completed < In Training < New
// Map trainingStatus strings to numerical priorities
    priority(animal) {
        const priorityMap = {
            'Completed': 1,
            'In Training': 2,
            'New': 3
        };
        return priorityMap[animal.trainingStatus] || 4;
    }

    // Check if the heap is empty
// Check if the heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }
}

// Export the MinHeap class for controller use
module.exports = MinHeap;
