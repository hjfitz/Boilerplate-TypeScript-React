const chalk = require('chalk');

const formatMethod = (method) => {
  switch (method) {
    case 'GET':
      return chalk.green('GET');
    case 'POST':
      return chalk.yellow('POST');
    case 'DELETE':
      return chalk.bold('DELETE');
    case 'PATCH':
      return chalk.blue('PATCH');
    default:
      return method;
  }
};

module.exports = {
  formatMethod,
};
