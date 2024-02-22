console.log('test file', import.meta.url);

import Colorschemes from "../cjs/Colorschemes.cjs";
import colorschemeSets from "../cjs/colorschemeSets.cjs";

import testCode from "./testCode.js";
testCode(Colorschemes,colorschemeSets);

console.log('end file');
