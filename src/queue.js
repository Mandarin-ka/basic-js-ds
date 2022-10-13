const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.queue=[];
    this.lengthQ=0;
  }

  getUnderlyingList() {
    let temp={"value": this.queue[this.lengthQ-1], "next": null};
    for (let i=this.lengthQ-2;i>=0;i--){
      temp={"value": this.queue[i], "next": temp}
    }
    return temp;
  }

  enqueue(temp) {
    this.queue.push(temp);
    this.lengthQ++;
  }

  dequeue() {
    this.lengthQ--;
    return this.queue.shift();
  }
}

module.exports = {
  Queue
};
