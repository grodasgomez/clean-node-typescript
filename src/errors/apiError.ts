import { ErrorCode } from 'errors/codes';

export class ApiError extends Error {
  code: string;
  statusCode: number;
  constructor(message: string, errorCode: ErrorCode) {
    super(message);
    this.statusCode = errorCode.statusCode;
    this.code = errorCode.code;
    this.name = 'ApiError';
  }
}
