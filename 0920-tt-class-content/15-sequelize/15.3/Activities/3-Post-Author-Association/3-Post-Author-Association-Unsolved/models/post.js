module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        title: {
            type     : DataTypes.STRING,
            allowNull: false,
            validate : {
                len: [1]
            }
        },
        body : {
            type     : DataTypes.TEXT,
            allowNull: false,
            len      : [1]
        }
    }, {
            classMethods: {
                associate: function(models) {
                    // Using additional options like CASCADE etc for demonstration
                    // Can also simply do Task.belongsTo(models.User);
                    Post.belongsTo(models.Author, {
                        onDelete  : "CASCADE",
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        }
        // Add another "configuration" obect as an argument to set up an association to Authors
        // Example: http://docs.sequelizejs.com/en/1.7.0/articles/express/#modelstaskjs
    )
    ;

    return Post;
};
