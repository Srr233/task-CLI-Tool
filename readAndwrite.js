const fs = require('fs').promises;

const readFile = async (path) => {
  try {
    const data = await fs.readFile(path);
    return data.toString();
  } catch (e) {
    process.stderr.write(`Can't read file\n${e}\n`);
    process.exit(1);
  }
}
const writeFile = async (path, text) => {
  try {
    await fs.appendFile(path, `--- ${text}\n`);
    return true;
  } catch (e) {
    process.stderr.write(`Can't write file\n${e}\n`);
    process.exit(1);
  }
}

module.exports = {
  readFile,
  writeFile
}