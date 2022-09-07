import { BlockContactsList } from "~src/components/chat/contactsList/types";
import { BlockSearchPanel } from "~src/components/chat/searchPanel/types";

export type BlockSidebar = {
  searchPanel?: BlockSearchPanel;
  contactsPanel?: BlockContactsList;
};
