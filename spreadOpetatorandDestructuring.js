const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// console.log(obj["b"]);

// dot notation

// array Notation

// destructuring

// spread oprator

// destructuring + spread oprator

const { b, c, d, a, ...rest } = obj;

console.log(rest);
console.log(b);
console.log(c);

// Destructuring

// const { a: objA, b:objB, c: objC } = obj;

// const {a: newObjA, b: newObjB, c: newObjC} = newObj1

// console.log(newObjA);
// console.log(newObjB);
// console.log(newObjC);

// console.log(objA);
// console.log(objB);
// console.log(objC);

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);

// const newObj = Object.assign({}, obj, {d: 4, b: 8});

const newObj = { ...obj, d: 4, b: 8 };

console.log(newObj);
console.log(obj);

// const newObj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     b: 8
// }

// console.log(newObj);
// console.log(obj);

// Immutable
// const newObj = Object.assign({},obj, { d: 4} )

// console.log(newObj);
// console.log(obj);

// // const newObj = obj;

// console.log(obj);
// console.log(newObj);

// newObj.b = 8;

// console.log(obj);
// console.log(newObj);

// newObj.b = 8;

// console.log(obj);
// console.log(newObj);

// const newObj = Object.assign({}, obj);

// console.log(obj);
// console.log(obj);

// obj.d = 4;

// obj.e = 5;

// obj.b = 8

// obj["b"] = 9

// delete obj.c;

// console.log(obj);

// // CRUD

// // Dot Notation

// console.log(obj.a);

// // Array Notation

// const key = "b"

// console.log(obj[key]);

// Mutable

// Immutable
