import env from 'utils/env';
import { NextFunction, Request, Response } from 'express';
import { notify } from 'infrastructure/error-notifier/bugsnag';
import { ApiError, ERROR_CODES, ValidationError } from 'errors';

const { NODE_ENV } = env;

export default function errorHandler(
  error: ApiError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ApiError) {
    const { message, statusCode, code } = error;
    return res
      .status(statusCode)
      .json({ status: 'failed', errors: [{ message, code }] });
  }

  if (error instanceof ValidationError) {
    const { errors } = error;
    const { statusCode } = ERROR_CODES.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ status: 'failed', errors });
  }

  const { statusCode, code } = ERROR_CODES.INTERNAL_SERVER_ERROR;
  const message = 'There was an internal server error';

  notify(req, error);

  if (NODE_ENV !== 'production') console.log(error);

  return res
    .status(statusCode)
    .json({ status: 'failed', errors: [{ code, message }] });
}
