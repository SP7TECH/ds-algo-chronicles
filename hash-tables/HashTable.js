class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  // Hash function to be called by other methods
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hash(key);

    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
  }

  keys() {
    const allKeys = [];

    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }

    return allKeys;
  }
}

const ht1 = new HashTable();
console.log(ht1);

ht1.set("key1", 100);
ht1.set("key2", 200);
ht1.set("key3", 300);
ht1.set("key11", 400);
ht1.set("key4", 500);
console.log(ht1);

console.log(ht1.get("key11"));
console.log(ht1.keys());
