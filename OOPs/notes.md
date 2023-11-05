# JavaScript and Classes

1. JavaScript has introduced class syntax in ECMAScript 6 (ES6), also known as ECMAScript 2015. This syntax allows you to define classes in JavaScript. Classes provide a more structured and object-oriented way of defining constructor functions and prototypes.

example:

class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

sayHello() {
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
}

const person1 = new Person('Alice', 30);
person1.sayHello();

## Classes in JavaScript are syntactical sugar over the prototype-based inheritance system that JavaScript has always had. Under the hood, classes are still using prototypes, but they provide a more familiar and structured way to work with object-oriented programming concepts.

2. Object- It is collection of property and methods.
