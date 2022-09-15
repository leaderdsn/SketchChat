import { Nullable } from "~src/utils/types";

export type PasswordChangeFormData = {
  [key: number]:  Nullable<string>;
  oldPassword:  Nullable<string>;
  password:  Nullable<string>;
  repeatPassword:  Nullable<string>;
};
