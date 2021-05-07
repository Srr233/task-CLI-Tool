const fs = require('fs').promises;

const readFile = async (path) => {
  try {
    const data = await fs.readFile(path);
    return data.toString();
  } catch (e) {
    await fs.appendFile('./stderr.txt', `\n-----${new Date()}: Can't read file\nCurrent error:\n${e}`);
    throw new Error('Ops! Try to find out this error in the stderr.txt!');
  }
}
const writeFile = async (path, text) => {
  try {
    await fs.writeFile(path, text);
    return true;
  } catch (e) {
    await fs.appendFile('./stderr.txt', `\n-----${new Date()}: Can't write file\nCurrent error:\n${e}`);
    throw new Error('Ops! Try to find out this error in the stderr.txt!');
  }
}

const allOptions = ['action', 'shift'];

const isAllOptionExists = (options) => allOptions.every((item) => {
  if (!options[item]) process.exit(1);
  return true;
});

const areCorrectValues = (options) => {
  const resultOfEvery = allOptions.every((item) => {
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
    }
  });
  return resultOfEvery;
}

const doCaesarCipher = async (options) => {

  const input = options.input ? options.input : './stdin.txt';
  const output = options.output ? options.output : './stdout.txt';
  const infoOfInput = await readFile(input);

  const doCode = (text, shift) => {
    const C_LOWER_S = 97;
    const C_LOWER_E = 122;
    const C_UPPER_S = 65;
    const C_UPPER_E = 90;
    let result = '';
    for (const letter of text) {
      const l = letter.charCodeAt();
      if (l >= C_UPPER_S && l <= C_UPPER_E) {
        const shifted = l + (shift % 25);
        const newPos = shifted === C_UPPER_S ? shifted
          : shifted < C_UPPER_S ? C_UPPER_E - (C_UPPER_S - shifted)
            : shifted === C_UPPER_E ? shifted
              : shifted > C_UPPER_E ? C_UPPER_S + (shifted - C_UPPER_E)
                : shifted;
        result += String.fromCharCode(newPos);
      } else if (l >= C_LOWER_S && l <= C_LOWER_E) {
        const shifted = l + (shift % 25);
        const newPos = shifted === C_LOWER_S ? shifted
          : shifted < C_LOWER_S ? C_LOWER_E - (C_LOWER_S - shifted)
            : shifted === C_LOWER_E ? shifted
              : shifted > C_LOWER_E ? C_LOWER_S + (shifted - C_LOWER_E)
                : shifted;
        result += String.fromCharCode(newPos);
      } else {
        result += letter;
      }
    }
    return result;
  }
  let newText = '';
  switch(options.action) {
    case 'encode':
      newText = doCode(infoOfInput, options.shift);
      writeFile(output, newText);
      break;
    case 'decode':
      newText = doCode(infoOfInput, options.shift * -1);
      writeFile(output, newText);
      break;
  }
}
module.exports = {
  isAllOptionExists,
  areCorrectValues,
  doCaesarCipher
}