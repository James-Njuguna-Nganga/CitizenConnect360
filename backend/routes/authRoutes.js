const express = require('express');
const { register, login, requestPasswordReset } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/request-password-reset', requestPasswordReset);

module.exports = router;