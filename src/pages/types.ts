import { Nullable } from "~src/utils/types";

export type FormData = {
  [key: number]: Nullable<string>;
  login: Nullable<string>;
  password: Nullable<string>;
} | {
  [key: number]: Nullable<string>;
  email: Nullable<string>;
  login: Nullable<string>;
  first_name: Nullable<string>;
  second_name: Nullable<string>;
  phone: Nullable<string>;
  password: Nullable<string>;
  repeat_password: Nullable<string>;
};
