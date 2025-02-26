const Incident = require('../models/incidentModel');

exports.createIncident = async (req, res) => {
  const { title, description, multimedia } = req.body;
  try {
    const incident = await Incident.create({ title, description, multimedia, userId: req.userId });
    res.status(201).json(incident);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getIncidents = async (req, res) => {
  try {
    const incidents = await Incident.findAll();
    res.json(incidents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findByPk(req.params.id);
    if (!incident) {
      return res.status(404).json({ message: 'Incident not found' });
    }
    res.json(incident);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateIncident = async (req, res) => {
  const { title, description, multimedia } = req.body;
  try {
    const incident = await Incident.findByPk(req.params.id);
    if (!incident) {
      return res.status(404).json({ message: 'Incident not found' });
    }
    incident.title = title;
    incident.description = description;
    incident.multimedia = multimedia;
    await incident.save();
    res.json(incident);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteIncident = async (req, res) => {
  try {
    const incident = await Incident.findByPk(req.params.id);
    if (!incident) {
      return res.status(404).json({ message: 'Incident not found' });
    }
    await incident.destroy();
    res.json({ message: 'Incident deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};