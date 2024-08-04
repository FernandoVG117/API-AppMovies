const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Movie = sequelize.define('movie', {
    campo1: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Movie;