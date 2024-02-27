//"use strict";
//this inside global space

console.log(this); //--> Output: {}

//this inside function

function x() {
  console.log(this);
}

x();
//window.x()

//IIFE

(function x() {
  console.log(this);
})();

const obj = {
  a: 10,
  x: function () {
    console.log(this);
  },
};
obj.x();

//? Call, Apply and bind

const student1 = {
  name: "A",
  printName: function () {
    console.log(this.name);
  },
};

student1.printName();

const student2 = {
  name: "B",
};

//NOTE: student2.printName()---> will give error; here we can use call to share method;

student1.printName.call(student2); // now this is pointing to student2

//? this inside Arrow Function

const objj = {
  a: "A",
  b: () => {
    console.log("objj", this);
  },
};

objj.b();

const objj1 = {
  a: "A",
  b: function () {
    console.log("b", this);
    const y = () => {
      console.log("y", this);
    };
    y();
  },
};

objj1.b();
