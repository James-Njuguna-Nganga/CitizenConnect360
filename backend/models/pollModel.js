const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');

const Poll = sequelize.define('Poll', {
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  options: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
});

module.exports = Poll;