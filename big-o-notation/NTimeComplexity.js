const arr = ["nemo"];

let large = new Array(100000).fill("nemo");

function findNemo() {
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("nemo found!");
    }
  }
  let t1 = performance.now();

  console.log("Time taken to find nemo was " + (t1 - t0) + " milliseconds");
}

findNemo(large);
