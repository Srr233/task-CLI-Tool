const doCaesarCipher = require('./doCaesarCipher');
const { isAllOptionExists, areCorrectValues } = require('./checkers');
process.on('exit', (code) => {
  return console.log(`Process exit with code: ${code}`);
});


async function init (options) {
  const checkExists = isAllOptionExists(options);
  if (checkExists) {
    const areCorrect = areCorrectValues(options);

    if (areCorrect) {
      doCaesarCipher(options);
    }
  } else {
    throw new Error('all keys should exist');
  }
}

module.exports = init;