const expressAsyncHandler = require('express-async-handler');
const { UnprocessableEntityError } = require('../../helpers/errors');
const Goal = require('./goalModel');

const getGoals = expressAsyncHandler(async (req, res) => {
	const goals = await Goal.find();

	res.json({
		success: true,
		data: goals,
		msg: 'Get goals'
	});
});

const setGoal = expressAsyncHandler(async (req, res) => {
	const goal = await Goal.create({
		text: req.body.text,
		user: req.user._id
	});

	res.json({
		success: true,
		data: goal,
		msg: 'Set goal'
	});
});

const updateGoal = expressAsyncHandler(async (req, res) => {
	
	const goal = await Goal.findById(req.params.id);
	if(!goal) {
		throw new UnprocessableEntityError('goal not found');
	}
	const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});
	console.log(updatedGoal);

	res.json({
		success: true,
		data: updatedGoal,
		msg: 'Update goal'
	});
});

const deleteGoal = expressAsyncHandler(async (req, res) => {
	const goal = await Goal.findById(req.params.id);
	if(!goal) {
		throw new UnprocessableEntityError('goal not found');
	}
	await Goal.deleteOne({_id: req.params.id});

	res.json({
		success: true,
		data: {id: req.params.id},
		msg: 'Delete goal'
	});
});

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal
};