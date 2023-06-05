export type Assert = <T = any>(
  value: T,
  status?: number,
  msg?: string,
  opts?: {}
) => asserts value is NonNullable<T>;

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  admin: boolean;
};

export type Volunteer = {
  id: number;
  user_id: number;
  role_id: number;
};
