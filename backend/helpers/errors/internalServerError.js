class InternalServerError extends Error {
	constructor (params = 'Internal Server Error!') {
		super(params);
		this.success = false;
		this.data = params.data || null;
		this.msg = params.msg || params;
		this.code = 500;
	}
}

module.exports = InternalServerError;