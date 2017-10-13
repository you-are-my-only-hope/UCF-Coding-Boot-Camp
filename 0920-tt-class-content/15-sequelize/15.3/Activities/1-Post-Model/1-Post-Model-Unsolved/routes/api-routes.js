// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    // Add sequelize code to get every post and return them to the user with res.json
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    // Add sequelize code to get every post where the category is equal to req.params.category
    // and return them to the user with res.json
  });

  // Get rotue for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // Add sequelize code to to find a single post where the id is equal to req.params.id
    // and return it to the user with res.json
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    // Add sequelize code to save a new post using the data in req.body,
    // then return the result to the user with res.json
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // Add sequelize code to delete a single post where the id is equal to req.params.id
    // and return the result to the user with res.json
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // Add sequelize code to update a post to the values in req.body,
    // update the post where the id is equal to req.body.id.
    // Then return the result to the user with res.json
  });
};
