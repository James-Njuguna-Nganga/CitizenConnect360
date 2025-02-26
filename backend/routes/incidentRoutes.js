const express = require('express');
const { createIncident, getIncidents, getIncidentById, updateIncident, deleteIncident } = require('../controllers/incidentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createIncident);
router.get('/', getIncidents);
router.get('/:id', getIncidentById);
router.put('/:id', authMiddleware, updateIncident);
router.delete('/:id', authMiddleware, deleteIncident);

module.exports = router;