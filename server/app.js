<<<<<<< HEAD
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
=======
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const env = require("dotenv");
env.config()

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
>>>>>>> 0949e27974bf2d846eb3dd22626cab33ac402a54

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
<<<<<<< HEAD
=======
app.use(cors());
>>>>>>> 0949e27974bf2d846eb3dd22626cab33ac402a54

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD

app.use('/', indexRouter);
app.use('/users', usersRouter);
=======
app.use('/', indexRouter);
app.use('/api/users', usersRouter);



//mongodb connection
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.amlpj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
  {
     useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
  }
).then(() => {
  console.log('Database connected')
});
>>>>>>> 0949e27974bf2d846eb3dd22626cab33ac402a54

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
