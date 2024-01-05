import Handler from './handler';
import { Router } from 'express';
import createHandler from 'infrastructure/http/createHandler';
import {} from 'users/presentation/middlewares';
import UsersUseCase from 'users/usecase';

import { createUserMiddleware } from 'users/presentation/middlewares';
import { getUserMiddleware } from 'users/presentation/middlewares/getUserMiddleware';

const router = Router();
export default class UsersRouter {
  private handler: Handler;
  constructor(usersUseCase: UsersUseCase) {
    this.handler = new Handler(usersUseCase);
    this.registerRouters();
  }
  registerRouters() {
    router.get(
      '/users',
      getUserMiddleware,
      createHandler(this.handler.getUsers)
    );

    router.post(
      '/users',
      createUserMiddleware,
      createHandler(this.handler.createUser)
    );
  }

  getRouter() {
    return router;
  }
}
