module.exports = {
	selectQuotes: function(connection, callback, columns) {
		connection.query('SELECT ?? FROM quotes', [columns || '*'], callback)
	},

	deleteQuotes: function(connection, id, callback) {
		connection.query('DELETE FROM quotes WHERE `id` = ?', [id], callback);
	},

//this one will create
	createQuotes: function(connection, author, quote, callback) {
		connection.query('INSERT INTO quotes (author, quote) VALUES (?, ?)', [author, quote], callback);
	}
}