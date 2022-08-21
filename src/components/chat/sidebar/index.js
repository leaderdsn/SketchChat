import sidebarTemplate from "~src/components/chat/sidebar/sidebar.tmpl";
import searchPanel from "~src/components/chat/searchPanel";
import contactsList from "~src/components/chat/contactsList";
import constructor from "~src/modules/constructor";

const contextSidebar = {
  searchPanel: searchPanel,
  contactsPanel: contactsList,
};

export default constructor(contextSidebar, sidebarTemplate);
