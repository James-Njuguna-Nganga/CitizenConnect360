const express = require('express');
const { createPoll, getPolls, getPollById, updatePoll, deletePoll } = require('../controllers/pollController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createPoll);
router.get('/', getPolls);
router.get('/:id', getPollById);
router.put('/:id', authMiddleware, updatePoll);
router.delete('/:id', authMiddleware, deletePoll);

module.exports = router;