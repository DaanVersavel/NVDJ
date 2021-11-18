//node libraries importeren
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose= require('mongoose')
const bodyParser= require("body-parser");

//Route naar pagina maken
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mainRouter = require('./routes/Main');
var ContactRouter = require('./routes/Contact');
var FAQRouter = require('./routes/FAQ');
var InfoRouter = require('./routes/Info');
var LineUpRouter = require('./routes/Line-up');
var LocatieRouter = require('./routes/Locatie');
var TicketsRouter = require('./routes/Tickets');
var vrijwilligerRouter = require('./routes/Vrijwilliger');
var wikiRouter = require('./routes/wiki');


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
app.use('/Main', mainRouter);
app.use('/Contact', ContactRouter);
app.use('/FAQ', FAQRouter);
app.use('/Info', InfoRouter);
app.use('/Locatie', LocatieRouter);
app.use('/Tickets', TicketsRouter);
app.use('/Vrijwilliger', vrijwilligerRouter);
app.use('/Line-up', LineUpRouter);
app.use('/wiki', wikiRouter);





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

//database

app.use(bodyParser.urlencoded({extended: true}));
//Set up default mongoose connection
const connectionUrl = "mongodb+srv://Bob:A1CNkA58GFzGVRZA@projectinternetapplicat.7xwyz.mongodb.net/FAQ?retryWrites=true&w=majority";
mongoose.connect(connectionUrl,{useNewUrlParser: true}, {useUnifiedTopology: true} );
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//schema aanmaken
const notesSchema = {
  Naam: String,
  Vraag: String
}
const Note = mongoose.model("Note", notesSchema);

app.get("/", function(req,res){
  res.sendFile(__dirname+"/FAQ.html")
})

app.post("/",function(req,res){
  let newNote= new Note({
    title:req.body.Naam,
    content:req.body.Vraag
  })
  newNote.save();
  //res.redirect("/FAQ.html") redirect
})


module.exports = app;
