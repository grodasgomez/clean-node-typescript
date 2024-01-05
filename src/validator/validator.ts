type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type ValidatorReturnType<T extends IValidator<any, any>[]> =
  UnionToIntersection<T[number] extends IValidator<any, infer R> ? R : never>;

type ValidatorDataType<T extends IValidator<any, any>[]> = UnionToIntersection<
  T[number] extends IValidator<infer R, any> ? R : never
>;

export interface IValidator<T, R> {
  validate(data: T): Promise<R>;
}

export async function validateData<T extends IValidator<any, any>[]>(
  data: ValidatorDataType<T>,
  validators: T
): Promise<ValidatorReturnType<T>> {
  const results = await Promise.all(
    validators.map((validator) => validator.validate(data))
  );

  const mergedResult = results.reduce(
    (acc, result) => ({ ...acc, ...result }),
    {}
  );

  return mergedResult as ValidatorReturnType<T>;
}
