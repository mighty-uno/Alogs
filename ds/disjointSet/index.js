class DisjointSet {
  constructor(n) {
    this.totalN = n;
    this.parent = [];
    this.rank = [];
  }

  makeSet() {
    for (let index = 0; index < this.totalN; index++) {
      this.parent[index] = index;
    }
  }

  find(value) {
    if ((this.parent[value] = value)) {
      return this.parent;
    }
    this.parent[value] = this.find(this.parent[value]);
    return this.parent[value];
  }

  union(x, y) {
    /** Union by rank */
    let xRoot = this.find(x);
    let yRoot = this.find(y);

    if (xRoot === yRoot) return;

    if (this.rank[xRoot] < this.rank[yRoot]) {
      this.parent[yRoot] = xRoot;
    } else if (this.rank[xRoot] > this.rank[yRoot]) {
      this.parent[xRoot] = yRoot;
    } else {
      this.parent[xRoot] = yRoot;
      this.rank[yRoot] = this.rank[yRoot] ?? yRoot;
      this.rank[yRoot]++;
    }
  }
}
