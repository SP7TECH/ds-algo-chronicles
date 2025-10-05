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
    let newNode = new Node(value);

    if (!this.head) {
      // LL is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let pre = this.head;
    let temp = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    pre.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  shift() {
    if (!this.head) {
      return null;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = temp.next;
      temp.next = null;
    }

    this.length--;
  }

  get(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;

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
    if (index < 0 || index > this.length) return null;

    if (index === 0) this.unshift(value);
    if (index === this.length - 1) this.push(value);

    const newNode = new Node(value);
    let temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;

    return true;
  }
}

const ll1 = new LinkedList(4);
console.log(ll1);

ll1.push(8);
console.log(ll1);

ll1.pop();
console.log(ll1);

ll1.unshift(2);
console.log(ll1);

ll1.push(6);
ll1.push(8);
console.log(ll1.get(3));

ll1.set(3, 10);
console.log(ll1);

ll1.insert(4, 12);
console.log(ll1);
