const fse = require('fs-extra');
const { createSymbolSpriter, addFileInSpriter, compileSprite } = require('./spriteUtils');

/**
 * Check if a string is an svg file name
 * @param {string} fileName
 * @return {boolean}
 */
function isSvgFileName(fileName) {
  return fileName.match(/.*\.svg$/) !== null;
}

/**
 * Read file content and generate an object with path and file content
 * @param {string} filePath
 * @return {Promise} promise which resolve an object with keys 'path:string' and 'content:string'
 */
function createFileInfoObject(filePath) {
  return fse.readFile(filePath, { encoding: 'utf-8' })
    .then(fileContent => ({
      path: filePath,
      content: fileContent,
    }));
}

/**
 * Generate svg sprite of a directory
 * @param {string} dirPath directory path where svg file are store
 * @return {Promise} promise which resolve result as a string
 */
function generateSprite(dirPath) {
  const spriter = createSymbolSpriter();

  return fse.readdir(dirPath)
    .then(filesName => filesName.filter(isSvgFileName))
    .then(filesName => filesName.map(fileName => `${dirPath}/${fileName}`))
    .then(filesPath => Promise.all(filesPath.map(createFileInfoObject)))
    .then(filesObject => filesObject.forEach(addFileInSpriter(spriter)))
    .then(() => compileSprite(spriter));
}

module.exports = {
  generateSprite,
};
