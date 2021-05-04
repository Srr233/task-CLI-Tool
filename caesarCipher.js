const { writeFile, isAllOptionExists, areCorrectValues } = require('./services');

async function init (options) {
  const checkExists = isAllOptionExists(options);
  if (checkExists) {
    const checkValues = areCorrectValues(options);
  } else {
    throw new Error('all keys should exist');
  }
}

module.exports = init;