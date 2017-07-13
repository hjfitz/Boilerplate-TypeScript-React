const express = require('express');
const chalk = require('chalk');
const util = require('./util');

const app = express();

// create variables used throughout the program
const PORT = process.env.PORT || 8080;
const pub = `${__dirname}/src/public`;
const serverLocation = chalk.bold(`localhost:${PORT}`);

// log nicely
app.use('/', (req, res, next) => {
  // color the request for printing
  const method = util.formatMethod(req.method);

  // every time the server gets hit, print the time, method type and place hit.
  console.log(`${new Date()} :: ${method} ${req.url}`);
  next();
});

// keep all of the resources on /pub
app.use('/pub', express.static(pub, {
  extensions: ['css', 'js', 'png', 'jpg'],
}));

// but stick the html pages under the root.
app.use('/', express.static(pub, { extensions: ['html'] }));

console.log(chalk.yellow(`Attempting to listen on ...${serverLocation}`));

app.listen(PORT);

console.log(`${chalk.green('Success!')} Server running on ${serverLocation}\n`);
