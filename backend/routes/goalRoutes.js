const express = require('express');
const router = express.Router();
const {getGoals, updateGoal, setGoal, deleteGoal} = require('../controllers/goalController');

router.get('/', getGoals);
router.post('/', setGoal);
router.put('/:id', updateGoal);
router.delete('/:id', deleteGoal);

module.exports = router;