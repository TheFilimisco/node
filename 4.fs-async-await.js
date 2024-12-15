const { readFile } = require("node:fs/promises");

(async () => {
  console.log("Read first file...");
  //Add callbacks
  const text = await readFile("./archivo.txt", "utf-8");

  console.log(text);
  console.log("This would while it functions, appers this message");

  console.log("Read second file...");
  const secondText = await readFile("./archivo2.txt", "utf-8");
  console.log(secondText);
})();
