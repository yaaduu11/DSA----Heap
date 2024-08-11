

class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Helper methods
    parentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    leftChildIndex(index) {
      return index * 2 + 1;
    }
  
    rightChildIndex(index) {
      return index * 2 + 2;
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    // Insert method
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
      while (index > 0 && this.heap[this.parentIndex(index)] > this.heap[index]) {
        this.swap(index, this.parentIndex(index));
        index = this.parentIndex(index);
      }
    }
  
    // Remove method (remove the root)
    remove() {
      if (this.heap.length === 1) return this.heap.pop();
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return root;
    }
  
    heapifyDown() {
      let index = 0;
      while (this.leftChildIndex(index) < this.heap.length) {
        let smallerChildIndex = this.leftChildIndex(index);
        if (this.rightChildIndex(index) < this.heap.length && this.heap[this.rightChildIndex(index)] < this.heap[smallerChildIndex]) {
          smallerChildIndex = this.rightChildIndex(index);
        }
        if (this.heap[index] <= this.heap[smallerChildIndex]) break;
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      }
    }
  
    // Peek method
    peek() {
      return this.heap[0];
    }
  }
  
  // Example usage
  const minHeap = new MinHeap();
  minHeap.insert(50);
  minHeap.insert(30);
  minHeap.insert(20);
  minHeap.insert(15);
  minHeap.insert(10);
  minHeap.insert(8);
  minHeap.insert(5);
  
  console.log(minHeap.peek()); // Output: 5
  console.log(minHeap.remove()); // Output: 5
  console.log(minHeap.peek()); // Output: 8
