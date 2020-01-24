const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');
var data = require('./public/data.json');
const routes = require('./router/mainMenu.js');

app.use(express.static(__dirname + '/public'));
//set view engine as express-handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

//routes
app.get('/',routes);
app.get('/users',routes);
app.get('/login',routes);
app.get('/people',routes);
app.get('/groups',routes);
app.get('/companies',routes);
app.get('/userprofile',routes);


app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
