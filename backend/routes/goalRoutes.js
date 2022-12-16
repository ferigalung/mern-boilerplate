const express = require('express');
const { verifyJwt } = require('../helpers/auth/jwtAuth');
const router = express.Router();
const {getGoals, updateGoal, setGoal, deleteGoal} = require('../modules/goal/goalController');

router.get('/', verifyJwt, getGoals);
router.post('/', verifyJwt, setGoal);
router.put('/:id', verifyJwt, updateGoal);
router.delete('/:id', verifyJwt, deleteGoal);

module.exports = router;