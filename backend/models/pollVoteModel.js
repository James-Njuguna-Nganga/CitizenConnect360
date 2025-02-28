const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig');
const PollOption = require('./pollOptionModel');
const User = require('./userModel'); // Assuming you have a User model

const PollVote = sequelize.define('PollVote', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  poll_option_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: PollOption,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
}, {
  timestamps: false,
  freezeTableName: true, // This ensures the table name is exactly 'PollVote'
});

PollOption.hasMany(PollVote, { foreignKey: 'poll_option_id', as: 'votes' });
PollVote.belongsTo(PollOption, { foreignKey: 'poll_option_id', as: 'option' });
User.hasMany(PollVote, { foreignKey: 'user_id', as: 'votes' });
PollVote.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

module.exports = PollVote;