const SVGSpriter = require('svg-sprite');

/**
 * Generate the symbol id of a svg from file name
 * @param {string} defaultId - default id
 * @param {File} file - vinyl file input
 * @return {string} the symbol id
 */
function idGenerator(name, file) {
  const fileName = file.basename;
  const nbChar = fileName.length;
  const nbCharWithoutExt = nbChar - 4;
  const id = fileName.substr(0, nbCharWithoutExt);
  return id;
}

/**
 * Create config with symbol generator and root attributes
 * @param {*} rootAttributes
 * @param {object} rootAttributes attributes to add on svg element contaning symbols
 * @return SVGSpriter config
 */
function getConfig(rootAttributes) {
  return {
    shape: {
      id: {
        generator: idGenerator,
      },
    },
    mode: {
      symbol: {
        inline: true,
      },
    },
    svg: {
      rootAttributes,
    },
  };
}

/**
 * Create a spriter which generate symbols
 * @param {object} rootAttributes attributes to add on svg element contaning symbols
 * @return SVGSpriter
 */
function createSymbolSpriter(rootAttributes) {
  const config = getConfig(rootAttributes);
  return new SVGSpriter(config);
}

/**
 * Generate a function which add a file in a spriter
 * @param {SVGSpriter} spriter - spriter where to add file
 * @return {addFileInSpriter~addFile}
 */
function addFileInSpriter(spriter) {
  /**
   * Add file
   * @param {object} fileInfo
   * @param {string} fileInfo.path
   * @param {string} fileInfo.content
   */
  function addFile(fileInfo) {
    spriter.add(fileInfo.path, null, fileInfo.content);
  }
  return addFile;
}

/**
 * Compile svg files to a string
 * @param {SVGSpriter} spriter - spriter which contain files to compile
 * @return {Promise} promise with result as a string
 */
function compileSprite(spriter) {
  return new Promise((resolve, reject) => {
    spriter.compile((error, result) => {
      if (error) return reject(error);

      const { contents } = result.symbol.sprite;
      return resolve(contents.toString('utf8'));
    });
  });
}

module.exports = {
  createSymbolSpriter,
  addFileInSpriter,
  compileSprite,
};
