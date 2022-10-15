import { BlockHeaderPanel } from '~src/components/chat/headerPanel/types';
import { BlockMessagesList } from '~src/components/chat/messagesList/types';
import { BlockSendPanel } from '~src/components/chat/sendPanel/types';
import { Nullable } from '~src/utils/types';

export type BlockChatArea = {
  headerPanel: Nullable<BlockHeaderPanel>;
  messagesList: Nullable<BlockMessagesList>;
  sendPanel: Nullable<BlockSendPanel>;
} | {};
