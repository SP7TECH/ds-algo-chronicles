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
}

const ht1 = new HashTable();
console.log(ht1);
