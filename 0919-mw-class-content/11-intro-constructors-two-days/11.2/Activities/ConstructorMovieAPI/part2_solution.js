// Here we require/import the HTTP and url module, you will need a module to request the api
var http = require("http");
var url = require('url');
var request = require('request');

var movies = [];

// Here we define a port to listen to
var PORT = 8080;

//Movie constructor, name, year, plot and rated properties, 
// also create a method to "pretty print" the properties and return the text
function Movie(name, year, plot, rating) {
 	this.name = name;
 	this.year = year;
 	this.plot = plot;
 	this.rating = rating;
 	this.getSummary = function() {
 		var info =  "Movie Info: \n";
		info += "Name: " + this.name + "\n";
		info += "Year: " + this.year + "\n";
		info += "Plot: " + this.plot + "\n";
		info += "Rated: " + this.rating + "\n";
		return info;
 	}
}

// Here we create a generic function to handle requests and responses
// handle the request the url will have a query parameter of "title" which we'll use to call the api
function handleRequest(req, res) {
  var queryObject = url.parse(req.url,true).query;

  //api call
  var apiurl = "https://www.omdbapi.com?t="+queryObject.title;

  request(apiurl, function(error, response, body) {
  	body = JSON.parse(body);
  	var myMovie = new Movie(body.Title, body.Year, body.Plot, body.Rated);

  	movies.push(myMovie);
  	var output = "";

  	for (var i = 0; i < movies.length; i++) {
  		if (movies[i].name !== 'Undefined') {
	  		output += "\n\n";
	  		output += movies[i].getSummary();
	  	}
  	}

  	res.end(output);
  });
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT);

});
