import { BlockChatArea } from "~src/components/chat/chatArea/types";
import { BlockSidebar } from "~src/components/chat/sidebar/types";

export type BlockChat = {
  sidebar?: BlockSidebar;
  chatArea?: BlockChatArea;
};
