const router = require('express').Router();
const {authenticate} = require('./jwtAuth');
const {loginUser} = require('./controllers/userController');
const countryController = require('./controllers/countryController');

router.post('/login', loginUser);
router.get('/countries', authenticate, countryController.getCountries);
router.put('/countries', authenticate, countryController.addCountry);
router.delete('/countries', authenticate, countryController.deleteCountry);

module.exports = router;