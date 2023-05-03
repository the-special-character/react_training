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
  { name: "Isabella Nguyen", age: 23, gender: "female", role: "user" },
  { name: "Jacob Patel", age: 29, gender: "male", role: "user" },
];

// Immutable

// findIndex
// find
// Filter
// some
// every

// O(logN)
// const isCharlieExist = users.some(x => x.name === "Charlie Brown");

// console.log(isCharlieExist);

// O(N)
// const isEveryAdult = users.every(x => x.age > 18);

// console.log(isEveryAdult);

// O(logN)
// const index = users.findIndex(x => x.name === "Daisy Lee");

// const updatedUsers = [
//     ...users.slice(0,index),
//     ...users.slice(index + 1),
// ]

// console.log(updatedUsers);

// O(N)
// const updatedUsers1 = users.filter(x => x.name !== "Daisy Lee");

// console.log(updatedUsers1);

// 1. find index

// if record found then return array of records
// else return []
// O(N)
// const femaleRecords = users.filter(x => x.gender === "female" && x.age > 25);

// console.log(femaleRecords);

// console.log(femaleRecords);

// if record found then it will give value >= 0
// else return -1
// O(logN) best case
// O(N) worst case
// const i = users.findIndex(x => x.name === "Yagnesh");

// console.log(i);

// if record found then it will give record
// else return undefined
// O(logN) best case
// O(N) worst case
// const daisyInfo = users.find(x => x.name === "Yagnesh");

// console.log(daisyInfo);

// console.log(daisyInfo);

// const newUsers = [
//     ...users.slice(0, i),
//     {...users[i], role: "admin"},
//     ...users.slice(i + 1)
// ]

// console.log(newUsers);

// const index = users.findIndex(item => {
//     return item.name === "Daisy Lee"
// });

// console.log(users[index]);

// const newUsers = [
//     ...users.slice(0, index),
//     {...users[index], age: 20},
//     ...users.slice(index + 1)
// ]

// console.log(newUsers);

// console.log(index);
