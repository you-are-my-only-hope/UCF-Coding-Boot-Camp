// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Data //TODO define me!
var icecreams = [{
    name       : 'vanilla',
    price      : 10,
    awesomeness: 3
}, {
    name       : 'chocolate',
    price      : 4,
    awesomeness: 8
}, {
    name       : 'banana',
    price      : 1,
    awesomeness: 1
}, {
    name       : 'greentea',
    price      : 5,
    awesomeness: 7
}, {
    name       : 'jawbreakers',
    price      : 6,
    awesomeness: 2
}];

app.get("/icecreams", function(request, response) {
    //TODO render a list of all ice creams

    response.render('icecreams', {iceCreams: icecreams})

});
// Routes
app.get("/icecream/:index", function(req, res) {
    //TODO render the single ice-cream
    console.log('Rendering index: ' + req.params.index);
    res.render('icecream', icecreams[parseInt(req.params.index)]);
});

// Initiate the listener.
app.listen(port, function() {
    console.log('listening')
});
