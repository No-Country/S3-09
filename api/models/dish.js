const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Dish = sequelize.define('dish', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
    }
},
    {
        timestamps: false
    }
)

module.exports = Dish;
