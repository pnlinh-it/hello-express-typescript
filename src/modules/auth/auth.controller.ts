import { Request, Response } from 'express';
import authService from './auth.service';
import { catchAsync } from '../../utils/catch-async';
import jwtService from '../jwt/jwt.service';
import { UserDocument } from '../user/schema/user.schema';

const register = catchAsync(async (req: Request, res: Response) => {
  const user = await authService.register(req.body);
  const token = jwtService.generateToken(user.id);

  res.json({
    ...user,
    token: token
  });
});

const login = catchAsync(async (req: Request, res: Response) => {
  const user = req.user! as UserDocument;

  const token = jwtService.generateToken(user.id);

  res.json({
    id: user.id,
    email: user.email,
    name: user.name,
    token: token
  });
});

export default { register, login };
