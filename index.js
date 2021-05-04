const { Command } = require('commander');
const init = require('./caesarCipher');
const program = new Command();
program.version('0.0.1');

program
  .option('-s, --shift <type>', 'shift')
  .option('-i, --input <type>', 'input')
  .option('-o, --output <type>', 'output')
  .option('-a, --action <type>', 'action');

program.parse(process.argv);

const options = program.opts();
init(options);