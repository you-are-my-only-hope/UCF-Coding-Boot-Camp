// This application uses two different NPM packages to provide the complete address and weather information about any landmark (or location). 
// Ex: "node weatherdest Eiffel Tower" or "node weatherdest White House"

// Mainly it combines the code from the last two activities with a bit more daata handling. (Study it on your own time if interested).

// =========================================================================================================================================

// Include both the geocoder and weather NPM packages
var geocoder = require("geocoder");
var weather  = require("weather-js");

// Take in the command line arguments
var nodeArgs = process.argv;

// Create an empty string for holding the address
var address = "";

// Capture all the words in the address (again ignoring the first two Node arguments)
for (var i=2; i<nodeArgs.length; i++){

	// Build a string with the address.
	address = address + "" + nodeArgs[i];

	debugger;

}

// Then use the Google Geocoder to geocode the address
geocoder.geocode(address, function(err, data){

	// console.log(data.results[0].formatted_address);
	// console.log(JSON.stringify(data, null, 2));

	// Grab the full address
	var fullAddress = data.results[0].formatted_address;

	debugger;

	// Grab each of the address components
	var address_components = data.results[0].address_components;
	var zipCode = "";
	var city = "";

	// Find the zip code
	for (var i=0; i<data.results[0].address_components.length; i++){
		// console.log(address_components[i]);
		if (address_components[i].types[0] == "postal_code"){
			// console.log(address_components[i].short_name);
			zipCode = address_components[i].short_name;

			debugger;	
		}

		if (address_components[i].types[0] == 'locality'){
			city = address_components[i].types[0];

			debugger;
		}
	}

	// Use the zip code or city to search for the weather.
	// If the zip code is available, then use that. Otherwise use the city.
	var search = "";

	if (zipCode != ""){
		search = zipCode;
	}
	else{
		search = city;
	}

	// Run the weather package to search by either zip or city. 
	weather.find({search: search, degreeType: 'F'}, function(err, result) {

		debugger;
	  
		// If there is insufficient data, notify the user. 
		if(err) 
		{
			console.log("");
			console.log("");
			console.log("");
			console.log("Sorry we don't have enough data on that location! Try somewhere else.");
		  	console.log("");
			console.log("");
			console.log("");

			return;
		}

	// console.log(JSON.stringify(result[0], null, 2));

	// Then print the Weather information and complete Address 
	console.log("");
	console.log("");
	console.log("");
	console.log("Weather Forecast: ");
	console.log(fullAddress)
	console.log("-------------------------------------------------------------------");
	console.log("Current Temperature: " + result[0].current.temperature + " F");
	console.log("Sky: " + result[0].current.skytext);
	console.log("Tomorrow's Forecast: Low of " + result[0].forecast[1].low + "F, High of " + result[0].forecast[1].high + "F");
	console.log("");
	console.log("");
	console.log("");

	});

});

// Example Input:
// node weatherdest.js Times Square

// RESULTING OUTPUT:
// Weather Forecast:
// Theater District, New York, NY, USA
// -------------------------------------------------------------------
// Current Temperature: 50 F
// Sky: Mostly Clear
// Tomorrow's Forecast: Low of 52F, High of 59F

