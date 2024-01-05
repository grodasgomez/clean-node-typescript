import UsersUseCase from 'users/usecase';
import { IValidator } from './validator';
import { ApiError, ERROR_CODES } from 'errors';
type ReceivedData = {
  username: string;
};
export class ValidatorAlreadyExists implements IValidator<ReceivedData, void> {
  constructor(private usersUseCase: UsersUseCase) {}

  async validate(data: ReceivedData) {
    const user = await this.usersUseCase.usersRepository.getUserByName(
      data.username
    );
    if (user) {
      const message = `The username '${data.username}' already is taken`;
      throw new ApiError(message, ERROR_CODES.USERNAME_ALREADY_EXISTS);
    }
  }
}
