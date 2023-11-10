const A = {
  name: "AA",
  Age: 12,
};

const B = {
  name: "BB",
  Age: 22,
};

const c = { ...B, ...A };
console.log(c);

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];

const z = [...x, ...y];
console.log(z);

let p = [3, 5, 7, 10, 100, 20, 44];
p.sort((a, b) => a - b);
console.log(p);
//p.sort();--->  The sort() method, when used without a comparison function, performs lexicographic (alphabetical) sorting, and in lexicographic order, the elements are treated as strings.
