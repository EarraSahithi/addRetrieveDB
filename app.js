const express = require('express');
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://sahithi:srinivas20@cluster0.vdsuz.mongodb.net/students?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  function (err) {
    if (err) {
      console.log("err in connection", err);
    } else {
      console.log("connection to database completed");
    }
  }
);


const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentsRouter = require("./routes/students");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students',studentsRouter);


module.exports = app;
