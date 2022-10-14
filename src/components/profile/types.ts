import { User } from "~src/api/authAPI";
import { BlockButton } from "~src/components/base/button/types";
import { BlockLabel } from "~src/components/base/label/types";
import { BlockUserAvatar } from "src/components/profile/userAvatar/types";
import { Nullable } from "~src/utils/types";

export type BlockProfileChange = {
  back:  Nullable<BlockButton>;
  avatar:  Nullable<BlockUserAvatar>;
  userName: Nullable<User>;
  content:  Nullable<BlockLabel[]>;
  action:  Nullable<BlockButton>;
} | {};
