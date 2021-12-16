import { Router } from 'express';
import userController from './user.controller';
import { auth } from '../../middlewares/auth.middleware';

const router = Router();

router.get('/me', auth, userController.me);

export default router;
