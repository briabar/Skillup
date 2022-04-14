const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.post('/new', skillsCtrl.newRootNode);

module.exports = router;