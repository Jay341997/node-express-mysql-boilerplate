const express = require('express');
const validate = require('../../middlewares/validate');
const userController = require('../../controllers/user.controller');
const userValidation = require('../../validations/user.validation');
const auth = require('../../middlewares/auth/cookie.auth');

const router = express.Router();

router
  .route('/')
  .get(auth('getUsers'), validate(userValidation.getUsers), userController.getAllUsers)

module.exports = router;  