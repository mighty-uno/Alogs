class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;

      return this;
    }

    let node = this.root;

    while (true) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
          return this;
        }

        node = node.left;
      } else {
        if (node.right === null) {
          node.right = newNode;
          return this;
        }
        node = node.right;
      }
    }
  }

  lookup(value) {
    let node = this.root;

    while (node) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else if (value === node.value) {
        return node;
      }
    }

    return false;
  }

  remove(value) {
    let node = this.root;

    while (node) {
      if (value < node.value) {
        node = node.left;
      } else if (value > node.value) {
        node = node.right;
      } else if (value === node.value) {
        return node;
      }
    }

    return false;
  }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(20);
tree.insert(5);
tree.insert(30);

console.log(tree.lookup(10));

// console.log(JSON.stringify(tree));
