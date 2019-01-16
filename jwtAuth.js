const jwt = require('jsonwebtoken');
const config = require('./config/config');
const { sendError } = require('./lib/responseHandler');

const authenticate = (req, res, next) => {
	let token;

	if (req.headers && req.headers.auth_token) {
		token = req.headers.auth_token;
		const decoded = jwt.verify(token, config.jwt_secret);
		if (decoded.username === config.username) {
			req.user = {
				username: 'admin'
			};
			return next();
		}
		else {
			return sendError(res, null, 'Invalid Authorization Token', 401);
		}
	}
	else {
		return sendError(res, null, 'Authorization token is required', 401);
	}
};

module.exports = {
	authenticate
};