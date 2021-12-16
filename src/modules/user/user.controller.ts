import { NextFunction, Request, Response } from 'express';
import { catchAsync } from '../../utils/catch-async';
import { UserDocument } from './schema/user.schema';

const me = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user! as UserDocument;

    return res.json({
      id: user.id,
      email: user.email,
      name: user.name,
      created_at: user.createdAt,
      updated_at: user.updatedAt
    });
  }
);

export default { me };
