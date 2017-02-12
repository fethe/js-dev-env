/**
 * Created by Federico Antonucci on 12/2/2017.
 */

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import open from 'open';
import logger from 'morgan';
import errorhandler from 'errorhandler';
import dotenv from 'dotenv';
import chalk from 'chalk';

const app = express();

// Load environment variables ==========================================================================================
dotenv.config();

// Express config ======================================================================================================
app.set('port', process.env.PORT || 3000);
app.set('env', process.env.ENV || 'development');
app.set('name', process.env.APP_NAME || 'App');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.write('hola');
});

// Error Handler =======================================================================================================
if (app.get('env') === 'development') {
  app.use(errorhandler())
}

// Server Start ========================================================================================================
app.listen(app.get('port'), function (err) {
  if (err) {
    console.log(chalk.red('x') + err, );
  } else {
    console.log(`${chalk.green('✓')} ${app.get('name')} is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
    console.log('    Press CTRL-C to stop\n');
    // open('http://localhost/' + port);
  }
});

module.exports = app;

