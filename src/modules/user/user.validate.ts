import Joi from 'joi';

export const createUser = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().required()
});
