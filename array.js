// let result = false;

// const value = 4;

// // O(N)
// // O(logN)
// // O(1)

// const length = arr.length / 2;

// console.log(length);

// if(arr[length] === value) {

// }

// if(arr[length] < value) {

// }

// if(arr[length] > value) {

// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(i);
//   const element = arr[i];
//   if(element == value) {
//     result = true;
//     break;
//   }
// }

// console.log(result);

const arr = [1, 2, 3, 4, 5, 6, 7];

const [a, b, ...rest] = arr;
console.log(rest);

// console.log(a);

// console.log(abc);

// console.log(lmn);

// const index = 3

// const newArr = [
//     ...arr.slice(0,index),
//     ...arr.slice(index + 1)];

// console.log(newArr);

// // O(1)
// const newArr = [0, ...arr, 7];

// console.log(newArr);
// console.log(arr);

// // Mutable

arr.splice(2, 2);
console.log(arr);

arr.push(7);

console.log(arr[0]);

// console.log(arr);

// arr.pop();

// console.log(arr);

// // never use
arr.unshift(0);

console.log(arr[0]);

// // never use
arr.shift();

console.log(arr[0]);
// console.log(arr);

// // Immutable
