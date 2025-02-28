const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');

const PollOption = sequelize.define('PollOption', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  poll_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Poll', // Ensure this matches the table name defined in Poll model
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  option_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true, // This ensures the table name is exactly 'PollOption'
});

module.exports = PollOption;