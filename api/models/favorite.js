const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const { User, Card, Restaurant } = require('../models/index');

const Favorite = sequelize.define('favorite', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
},
    {
        timestamps: false
    }
);


module.exports = Favorite;