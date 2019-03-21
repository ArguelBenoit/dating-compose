'use strict';

const Joi = require('joi');

const createUserSchema = Joi.object({
  username: Joi.string().regex(/^[-_ a-zA-Z0-9]+$/), // alpha-numeric characters space and coma
  email: Joi.string().email().required(),
  sexe: Joi.string().required(),
  birthday: Joi.date().max('now').required(),
  password: Joi.string().required()
});

module.exports = createUserSchema;
