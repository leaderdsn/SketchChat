import { BlockHeaderPanel } from "~src/components/chat/headerPanel/types";
import { BlockMessagesList } from "~src/components/chat/messagesList/types";
import { BlockSendPanel } from "~src/components/chat/sendPanel/types";

export type BlockChatArea = {
  headerPanel?: BlockHeaderPanel;
  messagesList?: BlockMessagesList;
  sendPanel?: BlockSendPanel;
};
