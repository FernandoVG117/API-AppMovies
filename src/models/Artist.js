const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Artist = sequelize.define('artist', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
});

module.exports = Artist;