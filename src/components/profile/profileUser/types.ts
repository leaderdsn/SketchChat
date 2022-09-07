import { BlockLabel } from "~src/components/base/label/types";
import { BlockUserAvatar } from "src/components/profile/userAvatar/types";

export type BlockProfileUser = {
  back?: string;
  avatar?: BlockUserAvatar;
  content?: BlockLabel[];
  action?: string;
  buttonChangeData?: string;
  buttonChangePassword?: string;
  buttonExit?: string;
};
