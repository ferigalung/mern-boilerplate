class UnprocessableEntityError extends Error {
	constructor (params = 'Unprocessable Entity Error!') {
		super(params);
		this.success = false;
		this.data = params.data || null;
		this.msg = params.msg || params;
		this.code = 422;
	}
}

module.exports = UnprocessableEntityError;
