const sequelize = require('sequelize');
const db = require('../models/database');

module.exports.User = require('./user.model')(db.database, sequelize);