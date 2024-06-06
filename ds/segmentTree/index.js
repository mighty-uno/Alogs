class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class SegmentTree {
  constructor(arr) {
    this.array = arr;
  }

  build(mArray) {
    const params = mArray ?? this.array;

    let size = Math.floor(params.length / 2);

    if (size == 0) {
      const node = new Node(params[0], null, null);
      return node;
    }

    let left = this.build(params.slice(0, size));
    let right = this.build(params.slice(size, params.length));

    return new Node(left.value + right.value, left, right);
  }
}

let segment = new SegmentTree([1, 2, 3, 4, 5, 6, 7]);
segment.build();
