import { Nullable } from "~src/utils/types";

export type FormData = {
  [key: number]: Nullable<string>;
  login: Nullable<string>;
  password: Nullable<string>;
} | {
  [key: number]: Nullable<string>;
  email: Nullable<string>;
  login: Nullable<string>;
  firstName: Nullable<string>;
  lastName: Nullable<string>;
  phone: Nullable<string>;
  repeatPassword: Nullable<string>;
  password: Nullable<string>;
};
