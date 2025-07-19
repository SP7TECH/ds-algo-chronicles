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

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);

    if (index === this.length) return this.push(value);

    if (index < 0 || index >= this.length - 1) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    if (index < 0 || index >= this.length) return undefined;

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let prev = null;
    let next = temp.next;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }

  findMiddleNode() {
    if (!this.head) return null;

    let slow = this.head;
    let fast = this.head;

    while (fast.next) {
      if (fast.next !== null) {
        fast = fast.next;
      }

      if (fast.next !== null) {
        fast = fast.next;
      }

      slow = slow.next;
    }

    return slow;
  }

  hasLoop() {
    if (!this.head) return false;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      console.log(fast);

      if (fast === slow) {
        return true;
      }
    }

    return false;
  }

  findKthFromEnd(k) {
    if (!this.head) return null;

    let fast = this.head;
    let slow = this.head;

    for (let i = 0; i < k; i++) {
      if (!fast) return null;
      fast = fast.next;
    }

    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }

  removeDuplicates() {
    if (!this.head) return null;

    let current = this.head;

    while (current) {
      let runner = current;
      while (runner && runner.next) {
        let temp = runner.next;
        if (current.value === temp.value) {
          runner.next = temp.next;
          temp.next = null;
          this.length--;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }

    return this;
  }

  binaryToDecimal() {
    if (!this.head) return 0;

    let current = this.head;

    let num = 0;
    while (current) {
      num = num * 2 + current.value;
      current = current.next;
    }

    return num;
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

ll1.push(3);
ll1.push(23);
ll1.push(7);
console.log(ll1.get(1));

ll1.insert(2, 10);
console.log(ll1);

ll1.remove(2);
console.log(ll1);

ll1.reverse();
console.log(ll1);

let list1 = new LinkedList(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);

console.log(list1.findMiddleNode());

console.log(list1.hasLoop());

let list2 = new LinkedList(1);
list2.push(2);
list2.push(3);
list2.push(4);
list2.tail.next = list2.head;
console.log(list2);
console.log(list2.hasLoop());

console.log(list1.findKthFromEnd(2));

let list3 = new LinkedList(3);
list3.push(3);
list3.push(3);

console.log(JSON.stringify(list3)); // For readable output
console.log(JSON.stringify(list3.removeDuplicates())); // For readable output

let list4 = new LinkedList(1);
list4.push(1);
list4.push(1);
list4.push(1);

console.log(list4.binaryToDecimal());
