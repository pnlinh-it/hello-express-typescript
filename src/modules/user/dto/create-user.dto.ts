export interface CreateUserDto {
  email: string;
  name: string;
  age?: number;
  password: string;
}
