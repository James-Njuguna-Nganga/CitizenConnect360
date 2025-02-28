const Poll = require('./pollModel');
const PollOption = require('./pollOptionModel');
const PollVote = require('./pollVoteModel');
const User = require('./userModel');
const Incident = require('./incidentModel');

// Define associations
Poll.hasMany(PollOption, { as: 'options', foreignKey: 'poll_id' });
PollOption.belongsTo(Poll, { as: 'poll', foreignKey: 'poll_id' });

PollOption.hasMany(PollVote, { as: 'pollVotes', foreignKey: 'poll_option_id' });
PollVote.belongsTo(PollOption, { as: 'pollOption', foreignKey: 'poll_option_id' });

User.hasMany(PollVote, { as: 'userVotes', foreignKey: 'user_id' });
PollVote.belongsTo(User, { as: 'voter', foreignKey: 'user_id' });

User.hasMany(Incident, { as: 'incidentUser', foreignKey: 'userId' });
Incident.belongsTo(User, { as: 'incidentUser', foreignKey: 'userId' });

module.exports = {
  Poll,
  PollOption,
  PollVote,
  User,
  Incident,
};