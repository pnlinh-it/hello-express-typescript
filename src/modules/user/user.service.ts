import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schema/user.schema';

const createUser = async (payload: CreateUserDto) => {
  return await User.create({
    name: payload.name,
    age: payload.age,
    createAt: new Date()
  });
};

export default { createUser };
