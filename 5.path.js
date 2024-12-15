const path = require("node:path");

// Path for different OS
console.log(path.sep);

//Join path with path.join

const filePath = path.join("content", "subfolder", "text.txt");
console.log(filePath);

//Just extract file's name

const base = path.basename("/tmp/midu-secret-files/password.txt");
console.log(base);

//Just extract extension
const extension = path.extname("/tmp/midu-secret-files/password.txt");
console.log(extension);
