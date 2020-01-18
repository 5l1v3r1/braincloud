const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');
var data = require('./public/data.json');

app.use(express.static(__dirname + '/public'));
//set view engine as express-handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

//routes
app.get('/',(req,res)=>{
  res.render('login');
});
app.get('/login',(req,res)=>{
  res.render('login');
});
app.get('/people',(req,res)=>{
  res.render('home', {
                data:data
        });
});
app.get('/groups',(req,res)=>{
  res.render('groups');
});
app.get('/companies',(req,res)=>{
  res.render('Companies');
});
app.get('/userprofile',(req,res)=>{
  res.render('userProfile');
});


var port = process.env.port || 3000;
app.listen(port);
