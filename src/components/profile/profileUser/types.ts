import { BlockLabel } from '~src/components/base/label/types';
import { BlockUserAvatar } from 'src/components/profile/userAvatar/types';
import { Nullable } from '~src/utils/types';

export type BlockProfileUser = {
  back: Nullable<string>;
  avatar: Nullable<BlockUserAvatar>;
  content: Nullable<BlockLabel[]>;
  action: Nullable<string>;
  buttonChangeData: Nullable<string>;
  buttonChangePassword: Nullable<string>;
  buttonExit: Nullable<string>;
} | {};
