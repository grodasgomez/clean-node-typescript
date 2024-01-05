import { NextFunction, Response } from 'express';

export default function createHandler<T>(
  handler: (arg0: T) => Promise<{
    statusCode: number;
    data: unknown;
  }>
) {
  return async (req: T, res: Response, next: NextFunction) => {
    try {
      const { statusCode, data } = await handler(req);

      res.status(statusCode).json({
        status: 'success',
        data,
      });
    } catch (error) {
      next(error);
    }
  };
}
