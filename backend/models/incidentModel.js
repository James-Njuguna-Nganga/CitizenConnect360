const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');

const Incident = sequelize.define('Incident', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  multimedia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Incident;