var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
 
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
  )
 
 
  var indexRouter = require('./routes/index');
  var usersRouter = require('./routes/users');
  var hatsRouter   = require('./routes/hats');
  var boardRouter   = require('./routes/board');
  var chooseRouter   = require('./routes/choose');
  var Hats = require('./models/hats');
  var resourceRouter = require('./routes/resource');
 
 
var app = express();
 
//require('dotenv').config();
const dotenv = require("dotenv");
dotenv.config();
//var Mobile = require("./models/mobile");
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Lahari:Lahari%401235@cluster0.rq2b14d.mongodb.net/?retryWrites=true&w=majority"); 
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
 
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
 
 
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/hats', hatsRouter);
  app.use('/board', boardRouter);
  app.use('/choose', chooseRouter);
  app.use('/resource',resourceRouter);
 
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
 
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
// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Hats.deleteMany();
  let instance1 = new Hats({
    hat_name: "Fedora",
    hat_color: 'White',
    hat_cost: 200
  });
  instance1.save().then(doc=>{
    console.log("First object saved")
  }).catch(err=>{
    console.error(err)
  })
 
  let instance2 = new Hats({
      hat_name: "Tomboy",
      hat_color: 'Red',
      hat_cost: 400
  });
  instance2.save().then(doc=>{
    console.log("Second object saved")
  }).catch(err=>{
    console.error(err)
  })
 
  let instance3 = new Hats({
      hat_name: "Boater",
      hat_color: 'Black',
      hat_cost: 500
  });
  instance3.save().then(doc=>{
    console.log("Third object saved")
  }).catch(err=>{
    console.error(err)
  })
}
let reseed = true;
if (reseed) { recreateDB(); }


module.exports = app;