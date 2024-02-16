const g = ["a", "b", "c", "d"];

console.log(g);
g.pop();
console.log(g);

Array.prototype.myPop = function () {
  if (this.length === 0) {
    return undefined;
  } else {
    const lastIndex = this.length - 1;
    const popElement = this[lastIndex];
    this.length = lastIndex;
    return popElement;
  }
};

console.log(g);
console.log("removed element", g.myPop());
