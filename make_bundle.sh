# https://www.npmjs.com/package/to-esm
# npm install to-esm -g

#to-esm  --input="src/*.cjs" --output src


to-esm cjs/Colorschemes.cjs --output esm/ --bundle-esm bundle/Colorschemes.min.mjs --bundle-cjs bundle/Colorschemes.min.cjs --bundle-browser dist/Colorschemes.min.js --update-all --use-bundle
to-esm cjs/colorschemeSets.cjs --output esm/ --bundle-esm bundle/colorschemeSets.min.mjs --bundle-cjs bundle/colorschemeSets.min.cjs --bundle-browser dist/colorschemeSets.min.js --update-all --use-bundle


