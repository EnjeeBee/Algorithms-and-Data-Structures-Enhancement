// Trie data structure used for fast prefix-based search on animal names

// TrieNode: Each node represents a single character in the search tree
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

// Trie: Manages word insertions and prefix lookups
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

// Insert a word into the Trie character by character
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

// Return all words in Trie that begin with the provided prefix
    startsWith(prefix) {
        const results = [];
        let node = this.root;

        for (const char of prefix) {
            if (!node.children[char]) return [];
            node = node.children[char];
        }

// Depth-first search helper to gather full words after prefix match
        this.dfs(node, prefix, results);
        return results;
    }

// Depth-first search helper to gather full words after prefix match
    dfs(node, prefix, results) {
        if (node.isEndOfWord) results.push(prefix);
        for (const char in node.children) {
// Depth-first search helper to gather full words after prefix match
            this.dfs(node.children[char], prefix + char, results);
        }
    }
}

// Export the Trie class for use in search-related endpoints
module.exports = Trie;
