import { Router } from 'express';
import authController from './auth.controller';

import validate from '../../middlewares/validate.middleware';
import { loginRule, registerRule } from './auth.validate';
import passport from 'passport';

const router = Router();

router.post('/register', validate(registerRule), authController.register);

router.post(
  '/login',
  validate(loginRule),
  passport.authenticate('local', { session: false }),
  authController.login
);

export default router;
