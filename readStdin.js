const fs = require('fs');
const doCode = require('./doCode');
const { Transform, pipeline } = require('stream');

const readStdin = (shift, out) => {
  process.stdin.setEncoding('utf8');

  const ts = new Transform({
    transform(chunk, _, cb) {
      if(chunk !== null) {
        cb(null, doCode(chunk.toString(), shift))
      }
    }
  });

  if (!out) {
    pipeline(
      process.stdin,
      ts,
      process.stdout,
      (err) => {
        if (err) {
          process.stderr.write('error')
        }
      }
    );
  } else {
    const readble = fs.createWriteStream(out);
    pipeline(
      process.stdin,
      ts,
      readble,
      (err) => {
        if (err) {
          process.stderr.write('error')
        }
      }
    );
  }
}

module.exports = readStdin;