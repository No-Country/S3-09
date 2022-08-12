const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Booking = sequelize.define('booking', {
    clients: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
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


module.exports = Booking;

