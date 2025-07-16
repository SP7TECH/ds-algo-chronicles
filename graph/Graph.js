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

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );

      return true;
    }

    return false;
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

const lettersGraph = new Graph();
lettersGraph.addVertex("A");
lettersGraph.addVertex("B");
lettersGraph.addVertex("C");

lettersGraph.addEdge("A", "B");
lettersGraph.addEdge("B", "C");
lettersGraph.addEdge("A", "C");

console.log(lettersGraph);

lettersGraph.removeEdge("A", "C");
console.log(lettersGraph);
