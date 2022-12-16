class UnauthorizedError extends Error {
	constructor (params = 'Unauthorized Error!') {
		super(params);
		this.data = params.data || null;
		this.msg = params.msg || params;
		this.code = 401;
	}
}

module.exports = UnauthorizedError;
