var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    connection.query("SELECT * FROM ?? WHERE ??     =    ?",
                            [tableInput, colToSearch, valOfCol], function(err, result) {
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol, orderBy) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ? ?";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol, orderBy], function(err, result) {
      console.log(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
