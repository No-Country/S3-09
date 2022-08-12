const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

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
    dishes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    available_dates: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: false
    }
);

module.exports = Restaurant;