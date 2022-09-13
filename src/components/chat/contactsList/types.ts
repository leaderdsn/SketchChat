import { BlockContact } from "src/components/chat/contact/types";
import { Nullable } from "~src/utils/types";

export type BlockContactsList = {
  contacts: Nullable<BlockContact[]>;
} | {};
