console.log('test file', import.meta.url);

import Colorschemes from "../bundle/Colorschemes.min.mjs";
import colorschemeSets from "../bundle/colorschemeSets.min.mjs";

import testCode from "./testCode.js";
testCode(Colorschemes,colorschemeSets);

console.log('end file');
