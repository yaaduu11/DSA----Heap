

class MaxHeap {
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
      while (index > 0 && this.heap[this.parentIndex(index)] < this.heap[index]) {
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
        let largerChildIndex = this.leftChildIndex(index);
        if (this.rightChildIndex(index) < this.heap.length && this.heap[this.rightChildIndex(index)] > this.heap[largerChildIndex]) {
          largerChildIndex = this.rightChildIndex(index);
        }
        if (this.heap[index] > this.heap[largerChildIndex]) break;
        this.swap(index, largerChildIndex);
        index = largerChildIndex;
      }
    }
  
    // Peek method
    peek() {
      return this.heap[0];
    }
  }
  
  // Example usage
  const maxHeap = new MaxHeap();
  maxHeap.insert(50);
  maxHeap.insert(30);
  maxHeap.insert(20);
  maxHeap.insert(15);
  maxHeap.insert(10);
  maxHeap.insert(8);
  maxHeap.insert(5);
  
  console.log(maxHeap.peek()); // Output: 50
  console.log(maxHeap.remove()); // Output: 50
  console.log(maxHeap.peek()); // Output: 30
  