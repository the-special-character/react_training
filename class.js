// findIndex
// find
// filter
// some
// every
// map
// reduce

// const user1 = {
//     name: "yagnesh",
//     age: 36,
//     gender: "male"
// }

// const user2 = {
//     name: "virat",
//     age: 34,
//     gender: "male"
// }

// public
// private
// protected
// internal

// method overloading is not possible

const str = "yagnesh";

console.log(str[0].toUpperCase());
console.log(str.toLowerCase().slice(1));

// encapsulation
// absraction
// inheritance
// polymorphysum

class User {
  static isEmployee = true;

  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  set firstName(value) {
    this._firstName = User.nameCase(value);
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(value) {
    this._lastName = User.nameCase(value);
  }

  get lastName() {
    return this._lastName;
  }

  #getAge() {
    return this.age;
  }

  static nameCase(value) {
    console.log(this.isEmployee);
    // console.log(this.);
    return `${value[0].toUpperCase()}${value.toLowerCase().slice(1)}`;
  }

  fullname(abc) {
    return `${this.firstName} ${this.lastName}`;
  }

  updateFirstName(name) {
    this.firstName = name;
  }

  getInfo() {
    return {
      age: this.#getAge(),
    };
  }
}

class Admin extends User {
  constructor() {
    super("yagnesh", "modh", 36, "male");
  }

  getInfo() {
    return super.getInfo();
  }
}

class SuperAdmin extends User {}

const admin = new Admin();
console.log(admin.getInfo());

console.log(admin);

console.log(User.nameCase("rohit"));

const user1 = new User("yagnEsh", "modh", 36, "male");

const user2 = new User("virat", "kohli", 34, "male");

// console.log(user1.getAge());

// console.log(user1.nameCase("rohit"));

console.log(user1);
console.log(user2);

// user1.updateFirstName("yag")

console.log(user1.fullname("xyz"));
console.log(user2.fullname());
