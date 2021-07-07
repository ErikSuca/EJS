const express = require('express');
const router = express.Router();

const detalleMenu = require('../controllers/detalleMenuController');

router.get('/', detalleMenu.index);


module.exports = router; 