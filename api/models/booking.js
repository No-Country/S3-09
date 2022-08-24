const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const Dish = require('../models/dish');

const Booking = sequelize.define('booking', {
    clients: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    total_pay: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 1000
    },
    restaurant_name: DataTypes.STRING,
    restaurant_img: DataTypes.STRING,
    restaurant_address: DataTypes.STRING,
},
    {
        timestamps: false
    }
)


module.exports = Booking;

