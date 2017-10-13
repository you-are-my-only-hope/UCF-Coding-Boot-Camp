var library = require('../library');

module.exports = function(app) {
	app.get('/library', function(req, res) {
		res.send(library.books);
	});
}