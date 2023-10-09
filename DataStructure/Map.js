const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

//fruits.forEach((item) => {
// console.log(item);
//});

//add element using set
fruits.set("Grapes", 200);

fruits.forEach((item) => {
  console.log(item);
});

console.log(fruits.get("apples"));

console.log("size of Map:", fruits.size);
console.log(fruits.has("apples"));
console.log(typeof fruits);

let text = "";
fruits.forEach(function (value, key) {
  text += key + " = " + value;
  console.log(text);
});
