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

  pop() {
    // For no items in the LL
    if (!this.head) return undefined;

    // For more than one item in the LL
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    // For one item in the LL
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }
}

let ll1 = new LinkedList(11);
console.log(ll1);

ll1.push(4);
console.log(ll1);

ll1.pop();
console.log(ll1);

ll1.unshift(5);
console.log(ll1);

ll1.shift();
console.log(ll1);
