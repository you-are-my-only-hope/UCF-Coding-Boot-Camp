var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "",
    database: "wishes_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

});

app.get('/', function  (req, res){
    connection.query('SELECT * from `wishes`', function  (err, data){
        if (err) throw err;
        res.render('index', {wishes: data});
    })
});

app.post('/save', function (req, res){
    var wish = req.body.wish;
    console.log('this wish is: ' + wish + ' on fire.');
    console.log('CSRF Token: ' + req.body.CSRF_TOKEN);
    connection.query('INSERT INTO wishes (wish) VALUES (?)', wish, function  (err, data){
        if (err) throw err;
        res.redirect('/');
    });
});


app.listen(port);
