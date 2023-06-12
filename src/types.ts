export type Assert = <T = any>(
  value: T,
  status?: number,
  msg?: string,
  opts?: {}
) => asserts value is NonNullable<T>;

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  admin: boolean;
};

export type Volunteer = {
  id: number;
  user_id: number;
  role_id: number;
};

export type Positions = "ProPresenter" | "AV" | "CM" | "Teacher" | "Worship";

export type Role = {
  id: number;
  user_id: number;
  position: string;
  date: string;
  time: string;
  description: string;
};
