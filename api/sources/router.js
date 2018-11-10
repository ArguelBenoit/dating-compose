const express = require('express');
const userCtrl = require('routes/userCtrl');

exports.router = () => {
  let apiRouter = express.Router();

  apiRouter.route('users/register').post(userCtrl.register);
  apiRouter.route('users/login').post(userCtrl.register);
  return apiRouter;
};
