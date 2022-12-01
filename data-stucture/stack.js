/** implementing linked list */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);

    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const holdingPointer = this.top;
      this.top = node;

      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;

    if (this.length == 0) {
      this.bottom = null;
    }

    return holdingPointer;
  }
}

const stack = new Stack();
// stack.push("google");
// stack.push("facebook");

// stack.pop();
// stack.pop();
