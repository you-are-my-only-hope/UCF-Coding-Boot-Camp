/* MongoDB Zoo (18.2.3)
 * =================== */

// STUDENTS: See near the bottom of this file for your TODO assignment.
// Good luck!

// Dependencies
var express = require("express");
var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "zoo";
var collections = ["animals"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});


// TODO: Make four routes that display results from your zoo collection

// 0: Root: Displays a simple "Hello World" message (no mongo required)
app.get("/", function(req, res) {
  res.send("Hello world");
});
// 1: All: Show every animal in a json
app.get("/all", function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  db.animals.find({}, function(err, data) {
    // Log any errors if the server encounters one
    if (err) {
      return console.log(err);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(data);
    }
  });
});

// 2: Name: Sort results by name in ascending order, in a json
// 3: Weight: Sort results by weight in descending order, in a json


// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
