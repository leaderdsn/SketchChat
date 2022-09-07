import { BlockLabel } from "~src/components/base/label/types";
import { BlockUserAvatar } from "src/components/profile/userAvatar/types";
import { BlockButton } from "~src/components/base/button/types";

export type BlockPasswordChange = {
  back?: BlockButton;
  avatar?: BlockUserAvatar;
  content?: BlockLabel[];
  action?: BlockButton;
};

export type PasswordChangeFormData = {
  [key: number]: string | undefined | null;
  oldPassword: string | undefined | null;
  password: string | undefined | null;
  repeatPassword: string | undefined | null;
};
