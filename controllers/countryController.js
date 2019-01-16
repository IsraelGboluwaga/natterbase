const { sendSuccess, sendError } = require('../lib/responseHandler');
const countries = ['Japan', 'Norway'];

const getCountries = (req, res) => {
	return sendSuccess(res, countries, null);
};

const addCountry = (req, res) => {
	const { countryToAdd } = req.body;
	if (!countryToAdd || typeof countryToAdd !== 'string')
		return sendError(res, null, 'Invalid entry', 400);

	countries.push(countryToAdd);
	return sendSuccess(res, null, 'Country added successfully');
};

const deleteCountry = (req, res) => {
	const { countryToDelete } = req.body;
	if (!countryToDelete || typeof countryToDelete !== 'string')
		return sendError(res, null, 'Invalid entry', 400);

	const index = countries.indexOf(countryToDelete);
	if (index !== -1)
		countries.splice(index, 1);

	return sendSuccess(res, null, 'Country deleted successfully');
};


module.exports = {
	getCountries,
	addCountry,
	deleteCountry
};