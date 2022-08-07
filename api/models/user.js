const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

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
        defaultValue: 'no-img.jpg'
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

module.exports = User;