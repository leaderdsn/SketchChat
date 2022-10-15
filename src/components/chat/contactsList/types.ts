import { ChatsData } from '~src/api/chatsAPI';
import { Nullable } from '~src/utils/types';

export type BlockContactsList = {
  contacts: Nullable<ChatsData[]>;
} | {};
