var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "greatbay_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

var start = function() {
  inquirer.prompt({
    name: "postOrBid",
    type: "rawlist",
    message: "Would you like to [POST] an auction or [BID] on an auction?",
    choices: ["POST", "BID"]
  }).then(function(answer) {
    if (answer.postOrBid.toUpperCase() === "POST") {
      postAuction();
    }
    else {
      bidAuction();
    }
  });
};

var postAuction = function() {
  inquirer.prompt([{
    name: "item",
    type: "input",
    message: "What is the item you would like to submit?"
  }, {
    name: "category",
    type: "input",
    message: "What category would you like to place your auction in?"
  }, {
    name: "startingBid",
    type: "input",
    message: "What would you like your starting bid to be?",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  }]).then(function(answer) {
    connection.query("INSERT INTO auctions SET ?", {
      item_name: answer.item,
      category: answer.category,
      starting_bid: answer.startingBid,
      highest_bid: answer.startingBid
    }, function(err, res) {
      console.log("Your auction was created successfully!");
      start();
    });
  });
};

var bidAuction = function() {
  connection.query("SELECT * FROM auctions", function(err, res) {
    console.log(res);
    inquirer.prompt({
      name: "choice",
      type: "rawlist",
      choices: function(value) {
        var choiceArray = [];
        for (var i = 0; i < res.length; i++) {
          choiceArray.push(res[i].item_name);
        }
        return choiceArray;
      },
      message: "What auction would you like to place a bid in?"
    }).then(function(answer) {
      for (var i = 0; i < res.length; i++) {
        if (res[i].item_name === answer.choice) {
          var chosenItem = res[i];
          inquirer.prompt({
            name: "bid",
            type: "input",
            message: "How much would you like to bid?"
          }).then(function(answer) {
            if (chosenItem.highest_bid < parseInt(answer.bid)) {
              connection.query("UPDATE auctions SET ? WHERE ?", [{
                highest_bid: answer.bid
              }, {
                id: chosenItem.id
              }], function(err, res) {
                console.log("Bid placed successfully!");
                start();
              });
            }
            else {
              console.log("Your bid was too low. Try again...");
              start();
            }
          });
        }
      }
    });
  });
};
