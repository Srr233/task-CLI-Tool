const allOptions = ['action', 'shift'];

const isAllOptionExists = (options) => allOptions.every((item) => {
  if (!options[item]) process.exit(1);
  return true;
});

const areCorrectValues = (options) => {
  const resultOfEvery = allOptions.every((item) => {
    let res;
    switch (item) {
      case 'action':
        res = options[item] == 'encode'
          || options[item] == 'decode';
        if (!res) {
          process.stderr.write('--action/-a should be action or decode!\n');
          process.exit(1);
        }
        return res;

      case 'shift':
        res = !isNaN(+options[item]);
        if (!res) {
          process.stderr.write('--shift/-s should be a number!\n');
          process.exit(1);
        }
        return res;
    }
  });
  return resultOfEvery;
}

module.exports = {
  isAllOptionExists,
  areCorrectValues
}