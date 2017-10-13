// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// orm (lowercase) references our connection to the DB.
var orm = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Character = orm.define("character", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the character (a string)
  name: Sequelize.STRING,
  // the character's role (a string)
  role: Sequelize.STRING,
  // the character's age (a string)
  age: Sequelize.INTEGER,
  // and the character's force points (an int)
  forcePoints: Sequelize.INTEGER
}, {
  timestamps: false
});

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
