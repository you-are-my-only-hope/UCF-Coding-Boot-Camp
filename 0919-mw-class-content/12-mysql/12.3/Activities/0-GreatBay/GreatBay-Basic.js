var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "greatbay_db"
})

connection.connect(function(err) {
    if (err) {
        console.error('DB Connection Failed');
        throw err;
    }
    console.log("connected as id " + connection.threadId);
    start();
})

var start = function() {
    inquirer.prompt({
        name: "postOrBid",
        type: "rawlist",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["PoSt", "BID"]
    }).then(function(answer) {
        console.log('Start Answer', answer);
        console.log('Start answer.postOrBid', answer.postOrBid);
        if (answer.postOrBid.toUpperCase() == "POST") {
            postAuction();
        } else {
            bidAuction();
        }
    })
}

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
            //Value = 'bob'
            if (isNaN(value) == false) {
                return true;
            } else {
                return 'Please enter a number if you want to get paid cash money. Dumb ass.';
            }
        }
    }]).then(function(answer) {
        connection.query("INSERT INTO auctions SET ?", {
            itemname: answer.item,
            category: answer.category,
            startingbid: answer.startingBid,
            highestbid: answer.startingBid
        }, function(err, res) {
            console.log("Your auction was created successfully!");
            start();
        });
    })
}

var bidAuction = function() {
    connection.query('SELECT * FROM auctions', function(err, res) {
        console.log(res);
        inquirer.prompt({
            name: "choice",
            type: "rawlist",
            choices: function(value) {
                var choiceArray = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArray.push(res[i].itemname);
                }
                return choiceArray;
            },
            message: "What auction would you like to place a bid in?"
        }).then(function(answer) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].itemname == answer.choice) {
                    var chosenItem = res[i];
                    inquirer.prompt({
                        name: "bid",
                        type: "input",
                        message: "How much would you like to bid?"
                    }).then(function(answer) {
                        if (chosenItem.highestbid < parseInt(answer.bid)) {
                            connection.query("UPDATE auctions SET ? WHERE ?", [{
                                highestbid: parseInt(answer.bid)
                            }, {
                                id: chosenItem.id
                            }], function(err, res) {
                                console.log("Bid placed successfully!");
                                start();
                            });
                        } else {
                            console.log("Your bid was too low. Try again...");
                            start();
                        }
                    })
                }
            }
        })
    })
}

