const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

//const letters = new Set(["a","b","c"]);

letters.forEach((item) => {
  console.log(item);
});

console.log("Size of set:", letters.size);

letters.add("z");

letters.forEach((item) => {
  console.log(item);
});

//It is same as HashSet in java
