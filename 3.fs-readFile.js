const fs = require("node:fs");
const { promisify } = require("node:util");

const readFilePromise = promisify(fs.readFile);
//About syn and not sync (Asyn)

//Add callbacks
/* fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log(text);
}); */
//Converting promise
console.log("Read first file...");
readFilePromise("./archivo.txt", "utf-8").then((text) => {
  console.log("primer texto: ", text);
});

console.log("This would while it functions, appers this message");

/* console.log("Read second file...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log(text);
}); */

console.log("Read second file...");
readFilePromise("./archivo2.txt", "utf-8").then((text) => {
  console.log("Segundo texto: ", text);
});
