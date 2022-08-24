const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Dish = require('../models/dish');
const Booking = require('../models/booking')
const Restaurant = sequelize.define('restaurant', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    opening_hour: {
        type: DataTypes.TIME,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    closing_hour: {
        type: DataTypes.TIME,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    highest_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    lowest_price: {
        type: DataTypes.FLOAT,
        allowNull: false
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