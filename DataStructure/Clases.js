class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
console.log(myCar.name + " " + myCar.year);

//Hoisting
//Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

//That means that you must declare a class before you can use it:

//You cannot use the class yet.
//myCar = new Car("Ford") will raise an error.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
const myCar1 = new Car("Ford");
console.log(myCar1);
