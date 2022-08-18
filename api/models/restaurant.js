const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Dish  = require('../models/dish');
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
    as: 'dish'
});

Dish.belongsTo(Restaurant, {
    foreignKey: 'restaurant_id',
    as: 'restaurant'
});


Restaurant.hasMany(Booking, { foreignKey: 'restaurant_id', as: 'booking' });
Booking.belongsTo(Restaurant, { foreignKey: 'restaurant_id', as: 'restaurant' });

module.exports = Restaurant;