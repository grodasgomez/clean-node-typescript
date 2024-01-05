import { UsersRepository } from 'users/repository';
import { CreateUserDto, GetUsersParams } from 'users/types';
import { validateData } from 'validator/validator';
import { ValidatorAlreadyExists } from 'validator/validatorUserAlreadyExists';

export default class UsersUseCase {
  constructor(public usersRepository: UsersRepository) {}

  getUsers = async (params: GetUsersParams) => {
    params.limit = params.limit ?? 10;
    params.page = params.page ?? 1;
    return this.usersRepository.getUsers(params);
  };

  createUser = async (payload: CreateUserDto) => {
    await validateData(payload, [new ValidatorAlreadyExists(this)]);

    return this.usersRepository.createUser(payload);
  };
}
