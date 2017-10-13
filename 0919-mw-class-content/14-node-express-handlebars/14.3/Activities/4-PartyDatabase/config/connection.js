var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "parties_db"
});

connection.connect(function (err){
    if (err) throw err;
    console.log('Connect as ID', connection.threadId);

});

module.exports = connection;