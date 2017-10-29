# Sprite SVG Symbol

Function based on svg-sprite which read all svg files of a directory and generate a sprite composed of symbols ready to be injected in a HTML file.

## Exemple
```javascript
const path = require('path');
const spriteSymbol = require('../src');

const iconsPath = path.resolve(__dirname, 'icons');

spriteSymbol.generateSprite(iconsPath)
  .then((content) => {
    console.log(content); // <svg width="0" height="0" style="position:absolute"><symbol ...
  })
```
