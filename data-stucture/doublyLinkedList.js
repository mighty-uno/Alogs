class DLinkList {
  constructor(value) {
    this.head = {
      previous: null,
      value: value,
      next: null,
    };

    this.length = 1;
    this.tail = this.head;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  preAppend(value) {
    const newNode = new Node(value);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  reverse() {
    let first = this.head;
    let second = first.next;
    this.tail = this.head;
    while (second != null) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this;
  }

  reverse2() {
    let first = this.head;
    let second = first.next;
    this.tail = this.head;

    while (second != null) {
      let temp = second.next;
      second.previous = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;

    return this;
  }

  print() {
    const array = [];
    let node = this.head;
    while (node != null) {
      array.push(node.value);
      node = node.next;
    }

    console.log(array);
    return this;
  }
}

class Node {
  constructor(value) {
    this.previous = null;
    this.value = value;
    this.next = null;
  }
}

const list = new DLinkList(10);

list.append(1);
list.append(2);

list.reverse2();
list.print();
console.log(list);
