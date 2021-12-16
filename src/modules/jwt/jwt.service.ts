import jwt from 'jsonwebtoken';
import addYears from 'date-fns/addYears';
import { config } from '../../config/config';

const generateToken = (userId: string) => {
  const current = new Date();

  const payload = {
    sub: userId,
    iat: current.getTime(),
    exp: addYears(current, 1).getTime()
  };

  return jwt.sign(payload, config.jwtSecret);
};

export default { generateToken };
