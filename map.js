const arr = [1, 2, 3, 4, 5];

// using map method only update recods
// always return same length of array
// O(N)
const newArr = arr.map((x) => {
  if (x % 2 === 0) {
    return x * 2;
  }
  return x;
});

console.log(newArr);

// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   newArr.push(element * 2);
// }

// console.log(newArr);

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

const newUser = users.map((x) => {
  if (x.name === "Daisy Lee") {
    return { ...x, age: 24 };
  }
  return x;
});

console.log(newUser);
