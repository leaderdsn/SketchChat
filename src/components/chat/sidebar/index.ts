import sidebarTemplate from "~src/components/chat/sidebar/sidebar.tmpl";
import searchPanel from "~src/components/chat/searchPanel";
import contactsList from "~src/components/chat/contactsList";
import constructor from "~src/modules/constructor";

type TSidebar = {
  searchPanel: string,
  contactsPanel: string,
}

const contextSidebar: TSidebar = {
  searchPanel: searchPanel,
  contactsPanel: contactsList,
};

export default constructor(contextSidebar, sidebarTemplate);
