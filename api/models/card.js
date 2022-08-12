const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Card = sequelize.define('card', {
    
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    card_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    expires: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CVV: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: false
    }
);

module.exports = Card;