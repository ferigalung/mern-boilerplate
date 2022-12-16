const express = require('express');
const { verifyToken } = require('../helpers/auth/jwtAuth');
const router = express.Router();
const {getGoals, updateGoal, setGoal, deleteGoal} = require('../modules/goal/goalController');

router.get('/', verifyToken, getGoals);
router.post('/', verifyToken, setGoal);
router.put('/:id', verifyToken, updateGoal);
router.delete('/:id', verifyToken, deleteGoal);

module.exports = router;