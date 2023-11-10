class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}Sam`;
  }

  set password(value) {
    this._password = value;
  }
}

const Sankalp = new User("s@Sam.ai", "abc");
console.log(Sankalp.email);

//Getter and setter using Property

function User1(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User1("chai@chai.com", "chai");

console.log(chai.email);

//Object Getter Setter

const User2 = {
  _email: "s@Sam.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const s = Object.create(User2); //Factory Function

//use # to make variable private
console.log(s.email);
