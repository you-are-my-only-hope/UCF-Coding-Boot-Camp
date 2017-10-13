// DEPENDENCIES
// =====================================
// Import the Keys file
var keys = require("./keys.js");

// Import the Twitter NPM package.
var Twitter = require("twitter");

// Import the Spotify npm package.
var spotify = require("spotify");

// Import the request npm package.
var request = require("request");

// Import the FS package for read/write.
var fs = require("fs");

// FUNCTIONS
// =====================================

// Writes to the log.txt file
var writeToLog = function(data) {
  fs.appendFile("log.txt", "\r\n\r\n");

  fs.appendFile("log.txt", JSON.stringify(data), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("log.txt was updated!");
  });
};

// Helper function that gets the artist name
var getArtistNames = function(artist) {
  return artist.name;
};

// Function for running a Spotify search
var getMeSpotify = function(songName) {

  if (songName === undefined) {
    songName = "What's my age again";
  }

  spotify.search({ type: "track", query: songName }, function(err, data) {
    if (err) {
      console.log("Error occurred: " + err);
      return;
    }

    var songs = data.tracks.items;
    var data = [];

    for (var i = 0; i < songs.length; i++) {
      data.push({
        "artist(s)": songs[i].artists.map(getArtistNames),
        "song name: ": songs[i].name,
        "preview song: ": songs[i].preview_url,
        "album: ": songs[i].album.name
      });
    }

    console.log(data);
    writeToLog(data);
  });
};

// Function for running a Twitter Search
var getMyTweets = function() {

  var client = new Twitter(keys.twitterKeys);

  var params = { screen_name: "cnn" };
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {

      var data = [];

      for (var i = 0; i < tweets.length; i++) {
        data.push({
          created_at: tweets[i].created_at,
          text: tweets[i].text
        });
      }

      console.log(data);
      writeToLog(data);
    }
  });
};

// Function for running a Movie Search
var getMeMovie = function(movieName) {

  if (movieName === undefined) {
    movieName = "Mr Nobody";
  }

  var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&r=json";

  request(urlHit, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var jsonData = JSON.parse(body);

      var data = {
        "Title:": jsonData.Title,
        "Year:": jsonData.Year,
        "Rated:": jsonData.Rated,
        "IMDB Rating:": jsonData.imdbRating,
        "Country:": jsonData.Country,
        "Language:": jsonData.Language,
        "Plot:": jsonData.Plot,
        "Actors:": jsonData.Actors,
        "Rotten Tomatoes Rating:": jsonData.tomatoRating,
        "Rotton Tomatoes URL:": jsonData.tomatoURL
      };

      console.log(data);
      writeToLog(data);
    }
  });

};

// Function for running a command based on text file
var doWhatItSays = function() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    console.log(data);

    var dataArr = data.split(",");

    if (dataArr.length === 2) {
      pick(dataArr[0], dataArr[1]);
    }
    else if (dataArr.length === 1) {
      pick(dataArr[0]);
    }

  });
};

// Function for determining which command is executed
var pick = function(caseData, functionData) {
  switch (caseData) {
    case "my-tweets":
      getMyTweets();
      break;
    case "spotify-this-song":
      getMeSpotify(functionData);
      break;
    case "movie-this":
      getMeMovie(functionData);
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
    default:
      console.log("LIRI doesn't know that");
  }
};

// Function which takes in command line arguments and executes correct function accordigly
var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

// MAIN PROCESS
// =====================================
runThis(process.argv[2], process.argv[3]);
