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
    hours: {
        type: DataTypes.STRING,
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
    is_favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
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


Restaurant.hasMany(Booking, { foreignKey: 'restaurant_id', as: 'booking' });
Booking.belongsTo(Restaurant, { foreignKey: 'restaurant_id', as: 'restaurant' });

module.exports = Restaurant;