import sidebarTemplate from "~src/components/chat/sidebar/sidebar.tmpl";
import searchPanel from "~src/components/chat/searchPanel";
import contactsList from "~src/components/chat/contactsList";
import constructor from "~src/modules/constructor";

const contextSidebar = {
  className: "y-sidebar",
  classNameSearchPanel: "y-sidebar__search-panel",
  classNameContactsPanel: "y-sidebar__contacts-list",
  searchPanel: searchPanel,
  contactsPanel: contactsList,
};

export default constructor(contextSidebar, sidebarTemplate);
