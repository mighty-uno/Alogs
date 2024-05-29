class TrieNode {
  constructor() {
    this.childNode = Array(26).fill(null);
    this.wordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(str) {
    let currentNode = this.root;

    for (let index = 0; index < str.length; index++) {
      const eleIndex = str.charCodeAt(index) - "a".charCodeAt(0);

      if (currentNode.childNode[eleIndex] == null) {
        currentNode.childNode[eleIndex] = new TrieNode();
        currentNode = currentNode.childNode[eleIndex];
      }
    }
    currentNode.wordEnd = true;
  }

  search(str) {
    debugger;
    let currentNode = this.root;
    for (let index = 0; index < str.length; index++) {
      const eleIndex = str.charCodeAt(index) - "a".charCodeAt(0);

      if (currentNode.childNode[eleIndex] == null) {
        return false;
      } else {
        currentNode = currentNode.childNode[eleIndex];
      }
    }

    return currentNode.wordEnd;
  }
}

const trie = new Trie();

const strs = ["apple", "banana", "mango"];

strs.forEach((str) => {
  trie.insert(str);
});

strs.forEach((str) => {
  trie.search(str);
});
