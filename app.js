//node libraries importeren
var express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Route naar pagina maken
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ContactRouter = require('./routes/Contact');
var FAQRouter = require('./routes/FAQ');
var InfoRouter = require('./routes/Info');
var LineUpRouter = require('./routes/Line-up');
var LocatieRouter = require('./routes/Locatie');
var vrijwilligerRouter = require('./routes/Vrijwilliger');
var cookieRouter = require('./routes/Cookies');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Route toevoegen
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Contact', ContactRouter);
app.use('/FAQ', FAQRouter);
app.use('/Info', InfoRouter);
app.use('/Line-up', LineUpRouter);
app.use('/Locatie', LocatieRouter);
app.use('/Vrijwilliger', vrijwilligerRouter);
app.use('/Cookies', cookieRouter);

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

//Set up mongoose connection
var mongoose= require('mongoose')
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
var connectionUrl = "mongodb+srv://Bob:A1CNkA58GFzGVRZA@projectinternetapplicat.7xwyz.mongodb.net/FAQ?retryWrites=true&w=majority";
var mongoDB = process.env.MONGODB_URI || connectionUrl;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
mongoose.connect(connectionUrl,{useNewUrlParser: true}, {useUnifiedTopology: true} );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;
