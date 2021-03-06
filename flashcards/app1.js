const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => { 
    res.render('card', { prompt: "What is ikigai?" }); 
  });

app.get('/hello', (req, res) => {
  res.render('hello', {name: req.cookies.username });
  });

app.post('/hello', (req, res) => {
    console.dir(req.body);
    res.cookie('username', req.body.username);  
    res.redirect('hello', { name: req.body.usernamed }); 
  });

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});