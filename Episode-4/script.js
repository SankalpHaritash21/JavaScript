/**********************************Functions***************************/
/*
What is a Function ?
A Function is a block of code that is designed to perform a task and executed when it is been called or invoked.

There are 3 ways of writing a function in JavaScript:
1. Function Declaration
2. Function Expression
3. Arrow Function

Function Declaration: Function Declaration is the traditional way to define a function. It is somehow similar to the way we define a function in other programming languages. We start declaring using the keyword “function”. Then we write the function name and the parameters.

Example: Below is an example that illustrates the use of Function Declaration.


 
    function add(a, b) {          - declaration
        console.log(a + b); 
    } 
      

    add(2, 3); - call function
After defining a function, we call it whenever the function is required.

Output:

5
Function Expression: Function Expression is another way to define a function in JavaScript. Here we define a function using a variable and store the returned value in that variable.

Example: Below is an example that illustrates the use of Function Expression.


    const add = function(a, b) { 
        console.log(a+b); 
    }  
      

    add(2, 3); 
 Here, the whole function is an expression and the returned value is stored in the variable. We use the variable name to call the function.

Output:

5
Arrow Functions: Arrow functions are been introduced in the ES6 version of JavaScript. It is used to shorten the code. Here we do not use the “function” keyword and use the arrow symbol.

Example: Below is the example that illustrates the use of the Arrow Function.

 Single line of code 
    let add = (a, b) => a + b;  
      
    console.log(add(3, 2)); 
This shortens the code to a single line compared to other approaches. In a single line of code, the function returns implicitly.

Output:

5

*/

function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("N");
  console.log("K");
  console.log("A");
  console.log("L");
  console.log("P");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Sankalp"))

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "Sankalp",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

/*/**************************Scope******************************/
//var c = 300
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Sankalp";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "Sankalp";
  if (username === "Sankalp") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}

addTwo(5);

const addTwo = function (num) {
  return num + 2;
};

/**************************Arrow Function*******************************/
const user1 = {
  username: "Sankalp",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
  let username = "Sankalp";
  console.log(this);
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo1 = (num1, num2) => ({ username: "Sankalp" });

console.log(addTwo1(3, 4))(
  // const myArray = [2, 5, 3, 7, 8]

  // myArray.forEach()

  // Immediately Invoked Function Expressions (IIFE)

  function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
  }
)();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Sankalp");
