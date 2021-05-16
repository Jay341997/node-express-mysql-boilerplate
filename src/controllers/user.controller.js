const { userService } = require('../services');
const { UserSerializer } = require('../serializer');

const getAllUsers = async (req, res) => {
  const result = await userService.userQuery();
  res.send(result.map(user => UserSerializer.serialize(user)));
};

module.exports = {
  getAllUsers
};