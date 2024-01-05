import UsersRouter from 'users/presentation/router';
import UsersUseCase from 'users/usecase';
import { UsersRepository } from 'users/repository';

type ContainerServices = {
  usersUseCase: UsersUseCase;
  usersRouter: UsersRouter;
  usersRepository: UsersRepository;
};

export default ContainerServices;
