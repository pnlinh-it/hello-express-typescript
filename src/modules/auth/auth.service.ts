import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/schema/user.schema';
import { LoginDto } from './dto/login.dto';
import { ApiException } from '../../exception/api.exception';
import * as bcrypt from 'bcrypt';

const register = async (payload: CreateUserDto) => {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new ApiException(422, 'Email is exist.');
  }
  const hashedPassword = await bcrypt.hash(payload.password, 10);

  return await User.create({
    email: payload.email,
    name: payload.name,
    age: payload.age,
    password: hashedPassword
  });
};

const login = async (payload: LoginDto) => {
  const user = await User.findOne({ email: payload.email });
};

export default { register, login };
