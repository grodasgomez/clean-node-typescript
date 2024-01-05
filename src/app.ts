import container from 'container';
import Server from 'infrastructure/http/express';
import errorHandler from 'infrastructure/http/errorHandler';

const server = new Server();
server.addRoute('/v1', container.usersRouter.getRouter());

server.addMiddleware(errorHandler);

server.listen();
