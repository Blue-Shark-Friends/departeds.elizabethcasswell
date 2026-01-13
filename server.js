var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

const partialsMiddleware = (req, res, next) => {
  app.set('views', __dirname + '/views');

  next();
};

// use res.render to load up an ejs view file

let branding_data = require('./views/data/_branding.json')

// index page
let index_data = require('./views/data/index.json')
app.get('/', partialsMiddleware, function(req, res) {
  res.render('pages/index', {index_data: index_data, branding_data: branding_data});
});

// end of pages

app.listen(9002);
console.log('Server is listening on port 9002');

module.exports = app;