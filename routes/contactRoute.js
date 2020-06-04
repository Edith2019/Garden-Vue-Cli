const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contactCtrl');
router.post('/submit', contactCtrl.submit);

module.exports = router;


