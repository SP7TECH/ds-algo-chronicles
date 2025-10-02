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
      return true;
    }

    return false;
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

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;

    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];

    return this;
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

const myGraph1 = new Graph();
myGraph1.addVertex("A");
myGraph1.addVertex("B");
myGraph1.addVertex("C");
myGraph1.addVertex("D");

myGraph1.addEdge("A", "B");
myGraph1.addEdge("A", "C");
myGraph1.addEdge("D", "A");
myGraph1.addEdge("D", "B");
myGraph1.addEdge("D", "C");

console.log(myGraph1);
myGraph1.removeVertex("D");
console.log(myGraph1);
