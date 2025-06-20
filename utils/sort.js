// Sorting utility functions: Merge Sort and Quick Sort for animal attributes
// mergeSort is stable; quickSort is faster but not always stable

// This module provides sorting functions for animals by different attributes
// It includes merge sort (stable) and quicksort (faster in practice)

// Recursive Merge Sort: stable sort for consistent ordering
function mergeSort(arr, key) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), key);
    const right = mergeSort(arr.slice(mid), key);

    return merge(left, right, key);
}

// Merge helper function to combine two sorted arrays
function merge(left, right, key) {
    const result = [];
    while (left.length && right.length) {
        if (left[0][key] <= right[0][key]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

// Recursive Quick Sort: faster sort, not stable
function quickSort(arr, key) {
    if (arr.length <= 1) return arr;

// Use first element as pivot and partition array around it
    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i][key] < pivot[key]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left, key).concat(pivot, quickSort(right, key));
}

// Export sorting functions to be used in the controller
module.exports = { mergeSort, quickSort };
