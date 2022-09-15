import { BlockMessage } from "~src/components/chat/message/types";
import { Nullable } from "~src/utils/types";

export type BlockMessagesList = {
  messages: Nullable<BlockMessage[]>;
} | {};
