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

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return false;
    }

    return true;
  }
}

const myGraph = new Graph();
myGraph.addVertex("1");
console.log(myGraph);

// Duplicate
console.log(myGraph.addVertex("1"));

// Adding Edge
myGraph.addVertex("2");
myGraph.addEdge("1", "2");
console.log(myGraph);
