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

# Here's what happens behind the scenes when the new keyword is used:

1. A new object is created: The new keyword initiates the creation of a new JavaScript object.
2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
3. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
4. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
