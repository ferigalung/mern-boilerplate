class BadRequestError extends Error {
	constructor (params = 'Bad Request Error!') {
		super(params);
		this.data = params.data || null;
		this.msg = params.msg || params;
		this.code = 400;
	}
}

module.exports = BadRequestError;
