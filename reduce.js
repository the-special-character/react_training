const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// findIndex
// find
// filter
// some
// every
// map

const users = [
  { name: "Alice Smith", age: 25, gender: "female", role: "user" },
  { name: "Bob Johnson", age: 30, gender: "male", role: "user" },
  { name: "Charlie Brown", age: 40, gender: "male", role: "user" },
  { name: "Daisy Lee", age: 22, gender: "female", role: "user" },
  { name: "Emily Chen", age: 28, gender: "female", role: "user" },
  { name: "Frank Liu", age: 35, gender: "male", role: "user" },
  { name: "Taimur", age: 8, gender: "male", role: "user" },
  { name: "Grace Wang", age: 27, gender: "female", role: "user" },
  { name: "Henry Kim", age: 32, gender: "male", role: "user" },
  { name: "Daisy Lee", age: 24, gender: "female", role: "admin" },
  { name: "xyz", age: 24, gender: "other", role: "admin" },
  { name: "Isabella Nguyen", age: 23, gender: "female", role: "user" },
  { name: "Jacob Patel", age: 29, gender: "male", role: "user" },
];

const age = 36;

const ageGroup = Math.floor(age / 10);

const key = `${ageGroup}0-${ageGroup}9`;

console.log(key);

const groupByAge = users.reduce((p, c, i) => {
  const ageGroup = Math.floor(c.age / 10);
  const key = `${ageGroup}0-${ageGroup}9`;
  if (p[key] === undefined) {
    p[key] = [];
  }
  p[key].push(c);
  return p;
}, {});

console.log(groupByAge);

//   "30-39"

//   const output = {
//     // "00-09":[],
//     "10-19": [],
//     "20-29": []
//   }

const groupByGender = users.reduce((p, c, i) => {
  const key = c.gender;
  if (p[key] === undefined) {
    p[key] = [];
  }
  p[key].push(c);
  return p;
}, {});

console.log(groupByGender);

// const obj = {
//     a: 1,
//     b: 2,
//     c: 5
// }

// const key = "c"

// if(obj[key] === undefined) {
//     obj[key] = 3;
// }

// console.log(obj);

// console.log(obj["b"] === undefined);

// console.log(Object.hasOwnProperty.call(obj, "a"));

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// obj.c = 3;

// console.log(obj.c);

// previous is output of my previous iteration
// const femaleRecords = users.reduce((p, c, i) => {
//     if(c.gender === "female") {
//         return [...p, c]
//     }
//     return p;
// }, []);

// console.log(femaleRecords);

// let result =  0;

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   result += element;
// };

// console.log(result);
