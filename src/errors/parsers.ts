import { ERROR_CODES } from 'errors/codes';
import { z } from 'zod';

export const parseZodError = (schemaError: z.ZodError) => {
  return schemaError.errors.map((error) => {
    return {
      code: ERROR_CODES.VALIDATION_ERROR.code,
      message: error.message,
      field_path: error.path,
    };
  });
};
