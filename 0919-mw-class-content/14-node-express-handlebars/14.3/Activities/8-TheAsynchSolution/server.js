var orm = require("./config/orm.js");

// Call orm method, passing in the anonymous function (with "res") as the callback.
orm.selectWhere("parties", "party_type", "grown-up", function(res) {
  var data = res;
  console.log(data);
});
