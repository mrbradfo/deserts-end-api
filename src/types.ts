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
  blackout_dates: string;
  txt_alerts: boolean;
  email_alerts: boolean;
};

export type Team = {
  id: number;
  name: string;
  description: string;
  positions: string;
};

export type Plan = {
  id: number;
  name: string;
  description: string;
  date: Date;
};

export type Assignment = {
  id: number;
  user_id: number;
  plan_id: number;
  position: string;
  notes: string;
  date: Date;
};
