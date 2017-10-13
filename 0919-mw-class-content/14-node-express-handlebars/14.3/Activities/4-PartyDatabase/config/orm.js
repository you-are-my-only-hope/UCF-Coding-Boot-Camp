var connection = require('./connection');

var orm = {
    /**
     * Returns all parties on order of cost
     * @param asc boolean order ascending or descending
     */
        findAll: function  (asc){
            var query = 'SELECT * FROM `parties` ORDER BY `party_cost` ';
            if (asc) {
                query += ' ASC';
            } else {
                query += ' DESC';

            }
            connection.query(query, function  (err, result){
                if (err)
                    throw err;
                console.log('result', result);
            });
        }
};

module.exports = orm;