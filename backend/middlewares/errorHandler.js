const errorHandler = (err, req, res, next) => {
	res.status(err.code || 500).json({
		success: false,
		data: err.data || null,
		msg: err.msg || 'Unknown Error!',
		stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
	});
	next();
};

module.exports = errorHandler;