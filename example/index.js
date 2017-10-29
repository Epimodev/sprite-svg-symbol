const path = require('path');
const spriteSymbol = require('../src');

const iconsPath = path.resolve(__dirname, 'icons');

spriteSymbol.generateSprite(iconsPath)
  .then((content) => {
    console.log('SPRITE GENERATED WITH SUCCESS\n');
    console.log('SPRITE RESULT :');
    console.log(content);
  })
  .catch((error) => {
    console.log('SPRITE GENERATION FAILED\n');
    console.log('ERROR :');
    console.error(error);
  });
