// Basic Node application for requesting data from the OMDB website

var request = require('request');

request('http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&r=json', function (error, response, body) {

	if (!error && response.statusCode == 200) {

		console.log("The movie's rating is: " + JSON.parse(body)["imdbRating"])
	}
});