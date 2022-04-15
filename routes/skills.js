const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.post('/new', skillsCtrl.newRootNode);
router.post('/new/:id', skillsCtrl.newNode);

module.exports = router;