const {sequelize} = require('../db');
const { Sequelize, Model } = require('sequelize');

class Restaurant extends Model{}

module.exports = {Restaurant};