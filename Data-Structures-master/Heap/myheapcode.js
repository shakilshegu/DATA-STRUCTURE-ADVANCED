class MinHeap {
  constructor() {
    this.heap = [];
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.size() - 1);
  }

  shiftUp(i) {
    let parent = this.parent(i);
    while (i > 0 && this.heap[i] < this.heap[parent]) {
      this.swap(i, parent);
      i = parent;
      parent = this.parent(i);
    }
  }

  delete() {
    if (this.size() === 0) return null;
    this.swap(0, this.size() - 1);
    const deletedValue = this.heap.pop();
    this.shiftDown(0);
    return deletedValue;
  }

  shiftDown(i) {
    const size = this.size();
    let smallest = i;
    const left = this.leftChild(i);
    const right = this.rightChild(i);

    if (left < size && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < size && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      this.swap(i, smallest);
      this.shiftDown(smallest);
    }
  }

  heapify() {
    const size = this.size();
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  heapSort() {
    const sortedArray = [];
    const size = this.size();
    for (let i = 0; i < size; i++) {
      sortedArray.push(this.delete());
    }
    return sortedArray;
  }
}

let h = new MinHeap();
let array = [6, 1, 5, 4, 7, 9, 1];
array.forEach((num) => h.insert(num));

h.insert(34);
h.insert(38);
h.insert(67);
h.insert(18);
h.insert(87);
h.insert(14);

h.heapify(); // Perform heapify operation

console.log(h.heap);
console.log(h.heapSort());
console.log(h);
