const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const { Booking, Card } = require('../models/index');
const User = sequelize.define('user', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
    },
    google: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},
    {
        timestamps: false
    }
);

//Associations
User.hasMany(Booking, { foreignKey: 'user_id', as: 'bookings' });
Booking.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

User.hasMany(Card, { foreignKey: 'user_id', as: 'cards' });
Card.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

module.exports = User;