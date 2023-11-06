//console.log(Math.PI);

const discriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(discriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,       
  configurable: false      
}
*/

const s = {
  name: "chai",
  price: 250,
  isAvailable: true,
  writable: false,
  orderChai: function () {
    console.log("Hi");
  },
};

console.log(Object.getOwnPropertyDescriptor(s, "name"));
/*

Object.defineProperty(s, "name", { writable: false, enumerable: false });
//enumerable false don,t allow iteration on value 

console.log(Object.getOwnPropertyDescriptor(s, "name"));
*/

for (let [key, value] of Object.entries(s)) {
  if (typeof value !== "function") console.log(key, value);
}
