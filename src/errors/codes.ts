export const ERROR_CODES = {
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    code: 'INTERNAL_SERVER_ERROR',
  },
  VALIDATION_ERROR: {
    statusCode: 400,
    code: 'VALIDATION_ERROR',
  },
  USERNAME_ALREADY_EXISTS: {
    statusCode: 422,
    code: 'USERNAME_ALREADY_EXISTS',
  },
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];
