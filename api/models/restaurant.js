const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Dish = require('../models/dish');

const Restaurant = sequelize.define('restaurant', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hours: {
        type: DataTypes.TIME,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price_range: {
        type: DataTypes.STRING,
    },
    img: {
        type: DataTypes.STRING,
        defaultValue: 'no-img.jpg'
    },
},
    {
        timestamps: false
    }
);

//Associations
Restaurant.hasMany(Dish, {
    foreignKey: 'restaurant_id',
    as: 'dishes'
});

Dish.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
    as: 'restaurant'
});

module.exports = Restaurant;