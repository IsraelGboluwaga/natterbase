const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const config = require('./config/config');
const appRoutes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());
app.disable('x-powered-by');

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use('/', appRoutes);

const port = process.env.PORT || config.port;
app.listen(port, function () {
	console.log("App running on port =>", port);
});