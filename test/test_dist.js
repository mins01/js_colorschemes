console.log('test file', import.meta.url);

import Colorschemes from "../dist/Colorschemes.min.js";
import colorschemeSets from "../dist/colorschemeSets.min.js";


import testCode from "./testCode.js";
testCode(Colorschemes,colorschemeSets);

console.log('end file');
