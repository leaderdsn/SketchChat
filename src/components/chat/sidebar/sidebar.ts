import Block from "~src/utils/block";
import { P } from "~src/types";
import { BlockSidebar } from "~src/components/chat/sidebar/types";
import SearchPanel from "~src/components/chat/searchPanel";
import ContactsList from "~src/components/chat/contactsList";

export default class Sidebar extends Block<BlockSidebar> {
  constructor(props: BlockSidebar) {
    super(props as P);
  }

  init() {
    this.children = {
      searchPanel: new SearchPanel({}),
      contactsPanel: new ContactsList({}),
    };
  }

  render() {
    return `
    <div class='y-sidebar'>
      <div class='y-sidebar__search-panel'>
        {{searchPanel}}
      </div>
      <div class='y-sidebar__contacts-list'>
        {{contactsPanel}}
      </div>
    </div>
    `;
  }
}
