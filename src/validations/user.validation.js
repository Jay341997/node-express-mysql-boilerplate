const Joi = require('joi');

const createUser = {
  body: Joi.object().keys({
    name: Joi.string().required()
  }),
};

const getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    limit: Joi.number().integer()
  }),
};

module.exports = {
  createUser,
  getUsers
};