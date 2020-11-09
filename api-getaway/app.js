const header = require('../wong-header');
console.log(header.display('Devan', 'Wong', 'API getaway'));
/*
============================================
; Title:  API GETAWAY
; Author: Devan Wong
; Date:   8 November 2020
; Description: Api getaway 
;===========================================
*/

var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var createError = require('http-errors');
var indexRouter = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');


var app = express();
//database connection 
mongoose.connect('mongodb+srv://admin:admin@buwebdev-cluster-1.w20ui.mongodb.net/api-getaway', {
  promiseLibrary: require('bluebird'),
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then ( () => console.log('connection successful'))
.catch ( (err) => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/api', apiCatalog);

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
