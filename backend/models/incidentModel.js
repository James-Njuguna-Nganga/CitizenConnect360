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
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  multimedia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User', // Name of the table in the database
      key: 'id',
    },
  },
});

module.exports = Incident;