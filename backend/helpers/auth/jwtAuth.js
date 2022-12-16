const jose = require('jose');
const { UnauthorizedError } = require('../errors');
const secret = new TextEncoder().encode(process.env.JWT_SECRET);
const User = require('../../modules/user/userModel');

const signJwt = async id => {
	return new jose.SignJWT({ id })
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('2h')
		.sign(secret);
};

const verifyToken = async (req, res, next) => {
	const token = req.headers.authorization?.replace('Bearer ', '');
	if(!token)
		next(new UnauthorizedError('Unauthorized!'));
		
	try {
		const verified = await jose.jwtVerify(token, secret);
		const user = await User.findById(verified.payload.id, '_id name email');
		req.user = user;
	} catch (err) {
		if(err.code === 'ERR_JWT_EXPIRED') {
			next(new UnauthorizedError('Token has been expired!'));
		}
		next(new UnauthorizedError('Invalid token!'));
	}
	next();
};

module.exports = {
	signJwt,
	verifyToken
};