# Sprite SVG Symbol

Function based on svg-sprite which read all svg files of a directory and generate a sprite composed of symbols ready to be injected in a HTML file.

## Install
```sh
yarn add sprite-svg-symbol

# or with npm

npm install --save sprite-svg-symbol
```

## Exemple
```javascript
const path = require('path');
const { generateSprite } = require('sprite-svg-symbol');

const iconsPath = path.resolve(__dirname, 'icons');

spriteSymbol.generateSprite(iconsPath)
  .then(sprite => {
    console.log(sprite); // <svg width="0" height="0" style="position:absolute"><symbol ...
  })
```
