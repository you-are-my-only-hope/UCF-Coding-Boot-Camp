var http = require('http');
var request = require('request');
var parse = require('url').parse;
var PORT = 8080;

function handleRequest(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', '*');

	var url = parse(req.url, true);
	console.dir(url);
	
	if (url.pathname == '/search') {

		var api_key = 'dc6zaTOxFJmzC';
		var api = 'http://api.giphy.com/v1/gifs/search?q='+ url.query.q +'&api_key='+ api_key;
		request(api, function(err, response, body)  {
			body = JSON.parse(body);

			var reply = {
				search: url.query.q,
				images: []
			};

			for (var i = 0; i < body.data.length; i++) {
				reply.images.push({
					fixed_height: body.data[i].images.fixed_height.url
				});
			}

			res.end(JSON.stringify(reply));
		});
		
	} else {
		res.end('It works! Path hit: '+ req.url);
	}
	
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log('server listening on: http://localhost:%s', PORT);
});