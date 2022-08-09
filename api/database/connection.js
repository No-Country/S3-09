const { Sequelize } = require('sequelize');

const database = new Sequelize('postgres://postgres:123456@localhost:5432/diinerDB');

module.exports = database;