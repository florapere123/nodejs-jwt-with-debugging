var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors'); //add cors

var routes = require('./routes/index');
var users = require('./routes/users');
var quotes = require('./routes/quotes'); //quotes
var todos = require('./routes/todos'); //todos
var reportData = require('./routes/reportData'); //reportData

var app = express();
const providers = [
   'adonis-swagger/providers/SwaggerProvider'
]
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors()); //add cors
app.use(bodyParser.json());//express.json()
app.use(bodyParser.urlencoded({ extended: true })); //false ==> true//express.urlencoded()
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//app.use('/users', users); //change to below line
app.use(users);
app.use(quotes); //quotes
app.use(todos); //todos
app.use(reportData); //reportData

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
