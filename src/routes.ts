import { Router } from 'express';
import auth from './modules/auth/auth.route';
import user from './modules/user/user.route';

const router = Router();

router.use('/auth', auth);

router.use('/users', user);

export default router;
