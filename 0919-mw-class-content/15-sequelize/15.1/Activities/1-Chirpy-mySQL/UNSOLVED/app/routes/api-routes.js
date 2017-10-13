// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
    app.get('/api/all', function (request, response) {
        connection.query('SELECT * FROM `chirps`', function  (err, result){
            if (err) throw err;
            response.json(result);
        });
    });

  // Add a chirp
    app.post('/api/new', function (request, response) {
        connection.query('INSERT INTO `chirps` (`author`, `chirp`) VALUES (?, ?)', [request.body.author, request.body.body], function  (err, result){
            if (err) throw err;
            response.json(result);
        });
    });

};
