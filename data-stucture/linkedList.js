class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }

  remove(index) {
    this.length--;
  }

  printList() {
    let currentNode = this.head;
    const array = [];
    array.push(currentNode.value);
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      array.push(currentNode.value);
    }

    console.log(array);
  }

  insertAt(position, value) {
    if (position === 0) {
      return this.prepend(value);
    }

    if (position >= this.length) {
      return this.append(value);
    }

    let currentNode = this.head;
    let counter = 0;
    while (currentNode.next !== null) {
      counter++;
      const previousNode = currentNode;
      currentNode = currentNode.next;
      if (position === counter) {
        const newNode = new Node(value);
        newNode.next = currentNode;
        previousNode.next = newNode;
        this.length++;
        break;
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(1);
myLinkedList.prepend(2);
myLinkedList.prepend(3);
myLinkedList.insertAt(6, 8);
myLinkedList.printList();
