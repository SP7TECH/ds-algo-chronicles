function findElement(a, b) {
  // Time Complexity - Saying O(n^2) is incorrect
  // Time Complexity - O(a * b)

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log(i, j);
    }
  }
}

findElement(1, 50);
