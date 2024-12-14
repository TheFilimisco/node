const fs = require("node:fs/promises");

//About syn and not sync (Asyn)

console.log("Read first file...");
//Add callbacks
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("primer texto: ", text);
});

console.log("This would while it functions, appers this message");

console.log("Read second file...");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("Segundo texto: ", text);
});
