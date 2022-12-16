const errorHandler = (err, req, res, next) => {
	const statusCode = err.code < 511 ? err.code : 500;
	res.status(statusCode).json({
		success: false,
		data: err.data || null,
		msg: err.msg || 'Internal Server Error!',
		stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
	});
	next();
};

module.exports = errorHandler;