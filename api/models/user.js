const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const { Booking, Card, Favorite, Restaurant } = require('../models/index');
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
//User has many Bookings
User.hasMany(Booking, { foreignKey: 'user_id', as: 'bookings' });
Booking.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

//User has many Cards
User.hasMany(Card, { foreignKey: 'user_id', as: 'cards' });
Card.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

//User has many Favorites
User.hasMany(Favorite, { foreignKey: 'user_id', as: 'favorites' });
Favorite.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

//Favorite has one Restaurant
Restaurant.hasMany(Favorite, { foreignKey: 'restaurant_id', as: 'restaurant' });
Favorite.belongsTo(Restaurant, { foreignKey: 'restaurant_id', as: 'favorite' });

module.exports = User;