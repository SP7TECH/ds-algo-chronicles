class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    let newNode = new Node(value);

    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const nodeToPush = new Node(value);

    if (!this.head) {
      this.head = nodeToPush;
      this.tail = nodeToPush;
    } else {
      this.tail.next = nodeToPush;
      this.tail = nodeToPush;
    }

    this.length++;
    return this;
  }
}

let ll1 = new LinkedList(11);
console.log(ll1);

ll1.push(4);
console.log(ll1);
