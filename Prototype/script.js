//loop arry original value not prototype value

Array.prototype.extraProperty = "Sam";
const a = [1, 2, 3, 4, 5];

for (let i in a) {
  console.log(i);
}
/*
1
2
3
4
extraProperty*/

//Skip Property
console.log("Removed Prototype");
for (let i in a) {
  if (a.hasOwnProperty(i)) console.log(i);
}
