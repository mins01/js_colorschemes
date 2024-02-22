console.log('test file', import.meta.url);

import Colorschemes from "../esm/Colorschemes.mjs";
import colorschemeSets from "../esm/colorschemeSets.mjs";


import testCode from "./testCode.js";
testCode(Colorschemes,colorschemeSets);

console.log('end file');