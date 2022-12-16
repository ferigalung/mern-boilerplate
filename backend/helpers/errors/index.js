const InternalServerError = require('./internalServerError');
const BadRequestError = require('./badRequestError');
const UnprocessableEntityError = require('./unprocessableEntityError');
const UnauthorizedError = require('./unauthorizedError');
module.exports = {
	InternalServerError,
	BadRequestError,
	UnprocessableEntityError,
	UnauthorizedError
};