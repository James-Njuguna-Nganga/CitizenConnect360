const Poll = require('../models/pollModel');

exports.createPoll = async (req, res) => {
  const { question, options } = req.body;
  try {
    const poll = await Poll.create({ question, options });
    res.status(201).json(poll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPolls = async (req, res) => {
  try {
    const polls = await Poll.findAll();
    res.json(polls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPollById = async (req, res) => {
  try {
    const poll = await Poll.findByPk(req.params.id);
    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' });
    }
    res.json(poll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updatePoll = async (req, res) => {
  const { question, options } = req.body;
  try {
    const poll = await Poll.findByPk(req.params.id);
    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' });
    }
    poll.question = question;
    poll.options = options;
    await poll.save();
    res.json(poll);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deletePoll = async (req, res) => {
  try {
    const poll = await Poll.findByPk(req.params.id);
    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' });
    }
    await poll.destroy();
    res.json({ message: 'Poll deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};