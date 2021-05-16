const { User } = require('../models');

const userQuery = async (conditions={}) => {
  return await User.findAll({
    raw: true,
    whwre: conditions
  });
}

module.exports = {
  userQuery
};