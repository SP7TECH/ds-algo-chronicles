class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }

    return false;
  }
}

const myGraph = new Graph();
myGraph.addVertex("A");
console.log(myGraph);

// Duplicate
console.log(myGraph.addVertex("A"));
