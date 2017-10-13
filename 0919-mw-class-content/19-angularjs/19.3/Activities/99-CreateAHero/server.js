var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
app.use(bodyParser.json());

require('./api/get-library')(app);
require('./api/post-library')(app);
app.use(express.static(__dirname + "/app"));

app.listen(port, function() {
    console.log("listening on port:" + port);
});
