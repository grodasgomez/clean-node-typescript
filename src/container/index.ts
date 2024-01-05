import UsersUseCase from 'users/usecase';
import UsersRouter from 'users/presentation/router';
import ContainerServices from 'container/container.interface';
import Container from 'container/container';
import { UsersRepository } from 'users/repository';

const container =
  new Container<ContainerServices>() as unknown as Container<ContainerServices> &
    ContainerServices;

container.service('usersRepository', () => new UsersRepository());
container.service('usersUseCase', (c) => new UsersUseCase(c.usersRepository));
container.service('usersRouter', (c) => new UsersRouter(c.usersUseCase));

export default container;
