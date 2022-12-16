const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getMe} = require('../modules/user/userController');
const { verifyToken } = require('../helpers/auth/jwtAuth');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', verifyToken, getMe);

module.exports = router;