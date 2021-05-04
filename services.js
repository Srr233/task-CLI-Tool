const fs = require('fs').promises;

const writeFile = async (path, text) => {
  try {
    await fs.writeFile(path, text);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}




const allOptions = ['action', 'shift', 'input', 'output'];

const isAllOptionExists = (options) => allOptions.every((item) => options[item]);

const areCorrectValues = (options) => {
  return allOptions.every((item) => {
    let res;
    switch(item) {
      case 'action':
        res = options[item] == 'encode'
          || options[item] == 'decode';
        if (!res) throw new Error('action should be encode or decode');
        return res;

      case 'shift': 
        res = !isNaN(+options[item]);
        if (!res) throw new Error('shift should be a number');
        return res;

      case 'input':
        res = options[item].includes('.txt');
        if (!res) throw new Error('input file should have a txt type');
        return res;
      case 'output':
        res = options[item].includes('.txt');
        if (!res) throw new Error('output file should have a txt type');
        return res;
    }
  });
}
module.exports = {
  writeFile,
  isAllOptionExists,
  areCorrectValues
}