'use strict';

const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const auth = require('./routes/auth');

require('dotenv').config();

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// *** cross domain requests *** //
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', auth);
app.get('/', (req, res, next) => {
  res.send('Hello world!');
});

// error handlers

// development error handlers
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handlers
// no stacktrace leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
