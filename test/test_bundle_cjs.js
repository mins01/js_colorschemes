console.log('test file', import.meta.url);

import Colorschemes from "../bundle/Colorschemes.min.cjs";
import colorschemeSets from "../bundle/colorschemeSets.min.cjs";

import testCode from "./testCode.js";
testCode(Colorschemes,colorschemeSets);

console.log('end file');
