const jwt = require('jsonwebtoken');
const config = require('../config/config');

const {sendSuccess, sendError} = require('../lib/responseHandler');

const loginUser = (req, res) => {
	const {username, password} = req.body;

	if (username !== config.username || password !== config.password)
		return sendError(res, null, 'Incorrect username or password', 401);

	let token = jwt.sign({username: "admin"}, config.jwt_secret);

	return sendSuccess(res, null, 'Login Successful', token);
};

module.exports = {
	loginUser
};