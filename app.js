var express  = require("express"),  
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    router = express.Router(),
    methodOverride = require('method-override');

app.use(router);
app.use(bodyParser.json());   
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

router.get('/', function(req, res) {  
   res.send("Hello World!");
});

mongoose.connect('mongodb://localhost/tvshows', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  else{
  	console.log('Connected to Database');
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});