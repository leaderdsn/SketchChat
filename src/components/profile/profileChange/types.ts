import { Nullable } from "~src/utils/types";

export type ProfileChangeFormData = {
  [key: number]: Nullable<string>;
  email: Nullable<string>;
  login: Nullable<string>;
  first_name: Nullable<string>;
  second_name: Nullable<string>;
  display_name: Nullable<string>;
  phone: Nullable<string>;
};
