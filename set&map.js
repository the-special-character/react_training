// set only add primitive type of data
// cant use huge data in map and set;

const arr = [1, 2, 3, 4, 5, 6, 4, 7, 8, 8, 9];

console.log([...new Set(arr)]);

const set = new Set([1, 2, 3, 4, "hello"]);

for (const iterator of set) {
  console.log(iterator);
}

console.log(set);

console.log(set.has(3));

set.delete(3);

console.log(set.size);

console.log(set);
// O(1);

// let result = false;

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if(element === 3) {
//     result = true;
//     break;
//   }
// }

// arr.splice(2, 1);

// console.log(arr);

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

const map = new Map();

map.set("Alice Smith", {
  name: "Alice Smith",
  age: 25,
  gender: "female",
  role: "user",
});
map.set("Bob Johnson", {
  name: "Bob Johnson",
  age: 30,
  gender: "male",
  role: "user",
});

for (const [key, value] of map) {
  console.log(key);
  console.log(value);
}

// o(1)
console.log(map.get("Alice Smith"));

map.delete("Alice Smith");

console.log(map.size);
