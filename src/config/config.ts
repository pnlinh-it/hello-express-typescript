import dotenv from 'dotenv';

dotenv.config();

console.log('Config dotenv!');

export const config = {
  jwtSecret: process.env.JWT_SECRET!
};
