const { isAllOptionExists, areCorrectValues, doCaesarCipher } = require('./services');

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