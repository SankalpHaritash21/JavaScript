const a = function () {
  console.log(this);

  const b = {
    f1: function () {
      console.log(this);
    },
  };

  const c = {
    f2: () => {
      console.log(this);
    },
  };

  b.f1();
  c.f2();
};

a();

console.log("hi", this);
