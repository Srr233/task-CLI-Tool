const doCode = require('./doCode');
const { readFile, writeFile } = require('./readAndwrite');
const readStdin = require('./readStdin');

const doCaesarCipher = async (options) => {
  const { input } = options;
  const { output } = options;

  if (!input) {
    switch (options.action) {
      case 'encode':
        readStdin(options.shift, output);
        break;
      case 'decode':
        readStdin(options.shift, output);
        break;
    }
  } else {
    const infoOfInput = await readFile(input);
    let newText = '';
    switch (options.action) {
      case 'encode':
        if (!output) {
          process.stdout.write(doCode(infoOfInput, options.shift));
        } else {
          newText = doCode(infoOfInput, options.shift);
          writeFile(output, newText);
        }
        break;
      case 'decode':
        if (!output) {
          process.stdout.write(doCode(infoOfInput, options.shift * -1));
        } else {
          newText = doCode(infoOfInput, options.shift * -1);
          writeFile(output, newText);
        }
        break;
    }
  }
}
module.exports = doCaesarCipher