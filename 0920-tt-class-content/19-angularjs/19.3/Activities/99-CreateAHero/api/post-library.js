var library = require('../library');

module.exports = function(app) {
	app.post('/library', function(req, res) {
		library.books.push(req.body);
		res.send(library.books);
	});
}