import { BlockContactsList } from "~src/components/chat/contactsList/types";
import { BlockSearchPanel } from "~src/components/chat/searchPanel/types";
import { Nullable } from "~src/utils/types";

export type BlockSidebar = {
  searchPanel: Nullable<BlockSearchPanel>;
  contactsPanel: Nullable<BlockContactsList>;
} | {};
