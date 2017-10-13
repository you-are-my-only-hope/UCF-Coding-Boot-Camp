// Here we require/import the HTTP module
var http = require("http");
var request = require("request");
var url = require('url');

// Here we define a port to listen to
var PORT = 8080;

//Movie constructor
function Movie(title, year, plot, rated) {
	this.name = title;
	this.year = year;
	this.plot = plot; 
	this.rated = rated;
	this.getInfo = function() {
		var info =  "Movie Info: \n";
		info += "Name: " + this.name + "\n";
		info += "Year: " + this.year + "\n";
		info += "Plot: " + this.plot + "\n";
		info += "Rated: " + this.rated + "\n";
		return info;
	}
}

// Here we create a generic function to handle requests and responses
function handleRequest(req, res) {
    // http://localhost:8080?title=movie
    var queryObject = url.parse(req.url,true).query;
    
    var apiurl = "https://www.omdbapi.com?t="+queryObject.title;

    request(apiurl, function (error, response, body) {
      	if (!error && response.statusCode == 200) {
	      	var data = JSON.parse(body);
	      	var myMovie = new Movie(data.Title, data.Year, data.Plot, data.Rated);
	      	var output = myMovie.getInfo();
	      	res.end(output);
    	}
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
