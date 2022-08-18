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
        allowNull: true
    }
},
    {
        timestamps: false
    }
)

Booking.hasMany(Dish, {
    foreignKey: 'dish_id',
    as: 'dish'
});

Dish.belongsTo(Booking, {
    foreignKey: 'dish_id',
    as: 'booking'
});

module.exports = Booking;

