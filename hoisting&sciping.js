// python & Javascript

// const a = 1;

// const b = 1;

// console.log(a  == b);

// const p = {a: 1};

// const q = {a: 1};

// console.log(p == q);

// primitive data types
// store as value
// string
// boolean
// number
// bigInt
// symobols

// non premitive data types
// store a address
// Objects
// arrays

let k = 1;

console.log(typeof `${k}`);

// Global scope
// Function scope
// block scope

// Self calling
// Imtermidiate Invoke Function expression
// (function() {
//     var c = 3;

//     console.log(c);
// })()

// if(true) {
//     const d = 5;
//     console.log(d);
// }

// console.log(d);

// if(true) {
//     var c = 5;
// }

// console.log(c);

// var a = 1;

// function test() {
//     var b = 2;
// }

// // console.log(b);

// test();

// var a = 1;

// var a = 2;

// console.log(a);

// let a = 1;

// a = 2;

// console.log(a);

// const pi = 3.14;

// pi = 2;

// let a = 2;

// Fix Old Javascript Problems
// Added New Features

// Web application
// Mobile Application (React Native)
// VR/Ar ()
// AI/ML
// Desktop Application

// reduce

//

//

// ECMA Script

// Old Javascript
// Vanila Javascript
// ECMA SCRIPT 5

// ES6
// ES7

// ES10
// ES13
// ECMA SCRIPT 2016

// Hoisting

// console.log(a);

//              hoisting   scoping  redeclare reassign
// var            yes        no         yes      yes

// let             no        yes        no       yes

// const           no        yes        no       no

var a = 1;

function test() {
  console.log(a);
  var a = 2;
}

test();
console.log(a);

var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    var b = 3;
    console.log(b);
  }
  inner();
}
outer();
