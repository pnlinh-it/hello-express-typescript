import Joi from 'joi';

export const loginRule = Joi.object({
  email: Joi.string().min(3).required(),
  password: Joi.string().min(6).required()
});

export const registerRule = Joi.object({
  email: Joi.string().email().min(3).required(),
  name: Joi.string().min(3).required(),
  age: Joi.number().min(1).optional(),
  password: Joi.string().min(6).required(),
  password_confirm: Joi.string().min(6).required().valid(Joi.ref('password'))
});
