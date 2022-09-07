import { BlockLabel } from "~src/components/base/label/types";
import { BlockUserAvatar } from "src/components/profile/userAvatar/types";
import { BlockButton } from "~src/components/base/button/types";

export type BlockProfileChange = {
  back?: BlockButton;
  avatar?: BlockUserAvatar;
  content?: BlockLabel[];
  action?: BlockButton;
};
