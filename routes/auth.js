const express = require('express');
const { registerUser, logoutUser } = require('../controllers/authController');
const { loginUser } = require('../controllers/authController')
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);

module.exports = router;