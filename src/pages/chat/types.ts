import { BlockChatArea } from "~src/components/chat/chatArea/types";
import { BlockSidebar } from "~src/components/chat/sidebar/types";
import { Nullable } from "~src/utils/types";

export type BlockChat = {
  sidebar: Nullable<BlockSidebar>;
  chatArea: Nullable<BlockChatArea>;
} | {};
