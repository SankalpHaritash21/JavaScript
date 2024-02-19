const contry = ["India", "Pakistan"];

const x = contry.join("|");
console.log(x);

Array.prototype.myJoin = function (Seperator = ",") {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result += this[i];
    if (i != this.length - 1) {
      result += Seperator;
    }
  }

  return result;
};

const y = contry.myJoin("|");
console.log(y);
