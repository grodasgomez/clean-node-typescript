import { Request } from 'express';
import { GetUsersParams } from 'users/types';
import UsersUseCase from 'users/usecase';

export default class UsersHandler {
  protected usersUseCase: UsersUseCase;

  constructor(usersUseCase: UsersUseCase) {
    this.usersUseCase = usersUseCase;
  }

  getUsers = async (req: Request<unknown, unknown, unknown, GetUsersParams>) => {
    const { query } = req;
    const data = await this.usersUseCase.getUsers(query);
    const statusCode = 200;
    return { statusCode, data };
  };

  createUser = async (req: Request) => {
    const { body } = req;
    const data = await this.usersUseCase.createUser(body);
    const statusCode = 201;
    return { statusCode, data };
  };
}
