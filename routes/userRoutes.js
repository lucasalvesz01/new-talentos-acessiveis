const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/save', userController.cadastrarUsuario);

module.exports = router;
