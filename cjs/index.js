//Contructor to variable from module
const less = require("./less");

//CommonJS require module
const { less } = require("./less");

//Global is a global varial in all our node apps
console.log(globalThis);
console.log("Hola mundo");
globalThis.console.log("Ist come from globalThis");

//function

function sum(a, b) {
  return a + b;
}

console.log(sum(4, 2));
console.log(less(4, 2));
