const fs = require('fs').promises;
const doCode = require('./doCode');

const readStdin = (shift, out) => {
  process.stdin.setEncoding('utf8');

  process.stdin.on('readable', async () => {
    let chunk = process.stdin.read();
    if (chunk !== null) {
      if (!out) {
        console.log(doCode(chunk, shift));
        readStdin(shift, out);
      } else {
        await fs.appendFile(out, `--- ${doCode(chunk, shift)}\n`);
        readStdin(shift, out);
      }
    }
  });

  process.stdin._read();
}

module.exports = readStdin;