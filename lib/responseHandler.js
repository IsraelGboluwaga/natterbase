const sendSuccess = (res, data, message, token, code) => {
	let resp = { status: true };

	if (message)
		resp.message = message;

	if (data || data === [] || data === {})
		resp.data = data;

	code = code ? code : 200;
	resp.code = code;

	if (token)
		resp.token = token;

	return res.status(code).json(resp);
};

/**
 * Generic send error helper
 * @param res
 * @param message
 * @param error
 * @param status
 */
const sendError = (res, error, message, code) => {
	let resp = { status: false };
	resp.message = message || 'An error occurred, please try again';

	if (error)
		resp.error = error.stack;

	code = code || 500;
	resp.code = code;

	return res.status(code).json(resp);
};

module.exports = {
	sendSuccess,
	sendError
};
