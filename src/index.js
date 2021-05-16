const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const compression = require('compression');
const cors = require('cors');
const cookie_parser = require('cookie-parser');
const httpStatus = require('http-status');

const config = require('../config');
const morgan = require('../config/morgan');
const ApiError = require('./utils/ApiError');
const { errorConverter, errorHandler } = require('./middlewares/error');
const logger = require('./middlewares/logger')(config);
const routes = require('./routes/v1');
const passport = require('passport');
const { jwtStrategy, cookieStrategy } = require('./middlewares/auth/strategy');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// cookiew authentication
app.use(cookie_parser(config.cookie_secret_key))

// enable cors
app.use(cors());
app.options('*', cors());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);
passport.use('cookie', cookieStrategy);

// routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.listen(config.web.port, () => {
  logger.info(`[p ${process.pid}] Listening at port ${config.web.port}`);
});