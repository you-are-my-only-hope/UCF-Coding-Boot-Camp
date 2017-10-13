var queries = require('./queries');

module.exports = function(app, connection) {
	app.get('/', function(req, res) {
		queries.selectQuotes(connection, function(err, data) {
			res.render('index', {
				quotes: data
			})
		})
	})

	app.post('/delete/:id', function(req, res) {
		var id = req.params.id;
		console.log(id);
		queries.deleteQuotes(connection, id, function(err, data) {
			res.redirect('/');
		})

		
		
	});

	app.post('/', function(req, res) {
		var id = req.params.id;
		var author = req.params.author;
		var quote = req.params.quote;

		queries.createQuotes(connection, author, quote, function(err, data){
			res.redirect('/');
		});
	});

	app.get('/:id', function(req, res) {
		connection.query('SELECT * FROM quotes WHERE `id` = ?', [req.params.id], function(err, data) {
			
			console.log(data);
			res.render('single_quote', data[0])
		})
	});

	app.post('/:id', function(req, res) {
		var author = req.body.author;
		var quote = req.body.quote;
		var id = req.params.id;
		connection.query('UPDATE quotes SET ?, ? WHERE id = ?', [{author: author}, {quote: quote}, id], function(err) {
			console.log(err);
			res.redirect('/');
		})
	})
}







