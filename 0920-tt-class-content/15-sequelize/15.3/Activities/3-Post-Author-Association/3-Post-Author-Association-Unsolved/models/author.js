module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("Author", {
        // Giving the Author model a name of type STRING
        name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // Using additional options like CASCADE etc for demonstration
                // Can also simply do Task.belongsTo(models.User);
                Author.hasMany(models.Post, {
                    onDelete  : "CASCADE"
                });
            }
        }
    });
    return Author;
};
