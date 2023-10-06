"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3); // code readability should be high
console.log("Sankalp");

let name = "Sankalp";
let age = 21;
let isLoggedIn = false;
let state;
var location = "pilani";

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique
// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof location);

/*
Hoisting is a concept that enables us to extract values of variables and functions even before initializing/assigning value without getting errors and this happens during the 1st phase (memory creation phase) of the Execution Context.*/

// var code (global)
//console.log(name1); // undefined- cant access variable before initialization
//let name1 = "Mukul Latiyan";

//console.log(name1); // undefined
//var name1 = "Mukul Latiyan";

var x = 5; // Initialize x
var y; // Declare y

console.log(x + y); // Display x and y

y = 7; // Assign 7 to y
