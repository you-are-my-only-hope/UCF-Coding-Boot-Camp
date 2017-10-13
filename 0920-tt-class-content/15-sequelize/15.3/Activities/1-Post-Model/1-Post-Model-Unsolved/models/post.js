module.exports = function(sequelize, DataTypes) {
    return sequelize.define('posts', {
        id      : {
            type         : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey   : true
        },
        title   : {
            type: DataTypes.STRING
        },
        body    : {
            type: DataTypes.TEXT
        },
        category: {
            type: DataTypes.STRING
        }
    });
};