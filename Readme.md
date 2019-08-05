# Sprite SVG Symbol

Function based on svg-sprite which read all svg files of a directory and generate a sprite composed of symbols ready to be injected in a HTML file.

## Install
```sh
yarn add sprite-svg-symbol

# or with npm

npm install --save sprite-svg-symbol
```

## Parameters

#### dirPath: string  
Path of the directory containing svg files to include in sprite

#### rootAttributes: object  
Attributes to add on svg element contaning symbols.
It can be usefull if you need to add some aria attributes for accessibility.


## Exemple
```javascript
const path = require('path');
const { generateSprite } = require('sprite-svg-symbol');

const iconsPath = path.resolve(__dirname, 'icons');

const attributes = { 'aria-hidden': true }

spriteSymbol.generateSprite(iconsPath, attributes)
  .then(sprite => {
    console.log(sprite); // <svg aria-hidden="true" width="0" height="0" style="position:absolute"><symbol ...
  })
```
