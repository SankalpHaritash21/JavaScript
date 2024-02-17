//? Custom Push

const a = [1, 2, 3, 4, 5];

//a.push(7);
//console.log(a);

Array.prototype.myPush = function (...elements) {
  for (let e of elements) {
    this[this.length] = e;
  }

  return this.length;
};

a.myPush(8, 9, 10);
console.log(a);
