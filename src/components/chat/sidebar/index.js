import sidebarTemplate from "./sidebar.tmpl";
import searchPanel from "../searchPanel"
import contactsList from "../contactsList";
import constructor from "../../../modules/constructor";

const contextSidebar = {
  className: 'y-sidebar',
  classNameSearchPanel: 'y-sidebar__search-panel',
  classNameContactsPanel: 'y-sidebar__contacts-list',
  searchPanel: searchPanel, 
  contactsPanel: contactsList,
}

export default constructor(contextSidebar, sidebarTemplate);