// .js por defecto utiliza CommonJS
// .mjs para utilizar ES Modules
// .cjs para utilizar CommonJS

import { sum } from "./sum.mjs";
import { less } from "./sum.mjs";

console.log(sum(1, 2));
console.log(less(1, 2));
