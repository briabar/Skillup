const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.post('/new', skillsCtrl.newRootNode);
router.post('/new/:id', skillsCtrl.newNode);
router.delete('/:id', skillsCtrl.deleteNode);
router.put('/edit/:id', skillsCtrl.updateNode);
router.post('/edit/:id', skillsCtrl.editPage);


module.exports = router;