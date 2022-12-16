const expressAsyncHandler = require('express-async-handler');
const { UnauthorizedError, UnprocessableEntityError } = require('../../helpers/errors');
const User = require('./userModel');
const argon2 = require('argon2');
const {signJwt} = require('../../helpers/auth/jwtAuth');

const registerUser = expressAsyncHandler(async (req, res) => {
	const user = await User.create({
		...req.body,
		password: await argon2.hash(req.body.password)
	}).catch(err => {
		if(err.code === 11000) {
			throw new UnprocessableEntityError('Email is already registered');
		}
	});

	const token = await signJwt(user._doc._id);
	res.json({
		success: true,
		data: {...user._doc, password: undefined, token},
		msg: 'Register User'
	});
});

const loginUser = expressAsyncHandler(async (req, res) => {
	const user = await User.findOne({email: req.body.email}, '_id name email password');
	const verifyPassword = await argon2.verify(user.password, req.body.password);
	if(!user || !verifyPassword) {
		throw new UnauthorizedError('Invalid email or password!');
	}

	const token = await signJwt(user._doc._id);
	res.json({
		success: true,
		data: {...user._doc, password: undefined, token},
		msg: 'Login User'
	});
});

const getMe = expressAsyncHandler(async (req, res) => {
	res.json({
		success: true,
		data: req.user,
		msg: 'Get User'
	});
});

module.exports = {
	registerUser,
	loginUser,
	getMe
};