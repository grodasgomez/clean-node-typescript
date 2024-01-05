import { ValidationError } from 'errors';
import { parseZodError } from 'errors/parsers';
import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export const getUserMiddleware = (
  req: Request<any, any, any, any>,
  res: Response,
  next: NextFunction
) => {
  const validatedSchema = z
    .object({
      limit: z.coerce.number().int().min(1).max(100).optional(),
      page: z.coerce.number().int().min(1).optional(),
    })
    .safeParse(req.query);
  if (!validatedSchema.success) {
    const errors = parseZodError(validatedSchema.error);
    return next(new ValidationError(errors));
  }
  req.query = validatedSchema.data;

  next();
};
