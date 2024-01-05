export class ValidationError extends Error {
  errors: any[];
  constructor(errors: any[]) {
    super('ValidationError');
    this.errors = errors;
    this.name = 'ValidationError';
  }
}
