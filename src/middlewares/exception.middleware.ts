import { NextFunction, Request, Response } from 'express';
import { ApiException } from '../exception/api.exception';

const exceptionHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  if (error instanceof ApiException) {
    return res.status(error.status).json({ message: error.message });
  }

  return res.status(500).json({ message: 'Internal server error.' });
};

export default exceptionHandler;
