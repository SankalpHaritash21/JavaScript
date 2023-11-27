//Hoisting

/*
console.log("Value of Age is", age);---- undefine

var age = 21;

console.log("Value of Age is", age);---- 21
*/

/*
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}

output:
10
10
10
10
10
10
10
10
10
10
*/

/*
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}

output:
0
1
2
3
4
5
6
7
8
9
*/

/*
a = 10;
console.log(a);
let a = 2;
output: error
*/

//--closure
const x = () => {
  return function y() {
    return "hi";
  };
};

console.log(x);
console.log(x());
let z = x();
console.log(z());
