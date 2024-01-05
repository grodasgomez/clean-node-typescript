import { CreateUserDto, GetUsersParams, User } from 'users/types';

export class UsersRepository {
  private users: User[] = [];

  getUsers = async (params: GetUsersParams) => {
    const { limit, page } = params;
    return this.users.slice((page - 1) * limit, page * limit);
  };

  createUser = async (payload: CreateUserDto) => {
    const user = {
      ...payload,
      id: '1',
      created_at: new Date().toISOString(),
      deleted_at: null,
      updated_at: new Date().toDateString(),
      first_name: 'John',
      last_name: 'Doe',
    };
    this.users.push(user);
    return user;
  };

  getUserByName = async (name: string) => {
    return this.users.find((user) => user.username === name);
  };
}
