'use strict';

const express = require('express');
const log = require('cf-nodejs-logging-support');
const logLevel = require('node-log-level');


const app = express();

app.use(logLevel);
app.use(log.logNetwork);

app.get('/:level', (req, res, next) => {
  const level = req.params.level;
  req.logMessage(level, 'A message');
  console.log('Write on level %s', level);
  res.send('OK');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App started');
});

