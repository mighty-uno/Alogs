class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;

      this.last = node;
    }

    this.length++;

    return this;
  }

  dequeue() {
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const queue = new Queue();
queue.enqueue("h");
queue.enqueue("i");
queue.enqueue("m");
queue.enqueue("a");

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);

class QueueWithStack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[0];
  }

  enqueue(value) {
    this.array.push(value);
    return this.array;
  }

  dequeue() {
    this.array.splice(0, 1);

    return this.array;
  }
}

// const q = new QueueWithStack();

// q.enqueue(1);
// q.enqueue(2);
// console.log(q.enqueue(3));

// console.log(q.dequeue());
// console.log(q.dequeue());
