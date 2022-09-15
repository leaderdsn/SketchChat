import { Nullable } from "~src/utils/types";

export type ProfileChangeFormData = {
  [key: number]: Nullable<string>;
  email: Nullable<string>;
  login: Nullable<string>;
  firstName: Nullable<string>;
  lastName: Nullable<string>;
  chatName: Nullable<string>;
  phone: Nullable<string>;
};
