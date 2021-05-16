const Status = require('http-status');

/* istanbul ignore next */
module.exports = (err, logger, res) => { // eslint-disable-line no-unused-vars
  logger.error(err);

  res.status(Status.INTERNAL_SERVER_ERROR).json({
    type: 'InternalServerError',
    message: err.message,
    stack: err.stack
  });
};