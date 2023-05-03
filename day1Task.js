const obj = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  gender: "male",
  role: "user",
};

// update age from 30 -> 34 immutabally

const newObj = { ...obj, age: 34 };

console.log(newObj);
console.log(obj);

// remove role property from the object

const { role, ...rest } = obj;

console.log(rest);
console.log(obj);
