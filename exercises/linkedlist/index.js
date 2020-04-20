// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let value = this.head;
    let node = this.head;
    while (node) {
      value = node.next || value;
      console.log(value);
      node = node.next;
    }

    return value;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    let node = this.getLast();
    if (!node) {
      this.head = new Node(data, this.head);
    } else {
      node.next = new Node(data);
    }
  }

  getAt(n) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter == n) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(n) {
    if (!this.head) {
      return;
    }
    if (n == 0) {
      this.head = this.head.next;
      return;
    }
    let previous = this.getAt(n - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, n) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (n == 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let previous = this.getAt(n - 1) || this.getLast();

    previous.next = new Node(data, previous.next);
    return;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

const list = new LinkedList();
list.head = new Node(10);

module.exports = { Node, LinkedList };
