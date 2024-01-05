import { ValidationError } from 'errors';
import { parseZodError } from 'errors/parsers';
import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export const createUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validatedSchema = z
    .object({
      username: z.string().min(3).max(255),
      email: z.string().email(),
      password: z.string().min(6).max(255),
      role: z.enum(['admin', 'user']),
    })
    .safeParse(req.body);
  if (!validatedSchema.success) {
    const errors = parseZodError(validatedSchema.error);
    return next(new ValidationError(errors));
  }
  req.body = validatedSchema.data;

  next();
};
