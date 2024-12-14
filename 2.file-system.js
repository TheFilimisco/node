const fs = require("node:fs"); //Since Node 16 is necessary put node: before of "name-module"

const stats = fs.statSync("./archivo.txt");

console.log(
  stats.isFile(), // If this a file
  stats.isDirectory(), //If this a folder
  stats.isSymbolicLink(), // if is a link symbolic
  stats.size // size on bytes
);
