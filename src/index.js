const add = require("./app");
// import add from "./app";

const h1Element = document.getElementsByTagName("h1");

console.log(h1Element[0]);

console.log(add(1, 2));
console.log(add(3, 2));
