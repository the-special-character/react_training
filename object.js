// class Animal {
//     layEggs =  true;

//     canFaly = true;

//     info() {
//        console.log(this.layEggs);
//     }

// }

const firstName = "Yagnesh";

const age = 36;

const yagneshInfo = {
  firstName,
  lastName: "Modh",
  age,
  gender: "Male",
  fullName() {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
  info() {
    return {
      fullname: this.fullName(),
      age: this.age,
    };
  },
};

console.log(yagneshInfo);

console.log(yagneshInfo.info());
