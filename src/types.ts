export type Assert = <T = any>(
  value: T,
  status?: number,
  msg?: string,
  opts?: {}
) => asserts value is NonNullable<T>;
