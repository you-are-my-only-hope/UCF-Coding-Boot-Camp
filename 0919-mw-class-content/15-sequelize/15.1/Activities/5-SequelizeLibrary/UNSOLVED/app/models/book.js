// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model with the following configuration

// 1. An autoincrementing primary key id
// 2. A title property of type STRING
// 3. An author property of type STRING
// 4. A genre property of type STRING
// 5. A pages property of type STRING
// 6. Set timestamps to false on this model

// Sync model with DB

// Makes the Book Model available for other files
module.exports = Book;
