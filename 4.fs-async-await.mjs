// Script moduls
import { readFile } from "node:fs/promises";

//About syn and not sync (Asyn)

console.log("Read first file...");
//Add callbacks
const text = await readFile("./archivo.txt", "utf-8");

console.log(text);
console.log("This would while it functions, appers this message");

console.log("Read second file...");
const secondText = await readFile("./archivo2.txt", "utf-8");
console.log(secondText);
