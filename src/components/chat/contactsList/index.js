import contactsListTemplate from "~src/components/chat/contactsList/contactsList.tmpl";
import contactTemplate from "~src/components/chat/contact/contact.tmpl";
import clone from "~src/utils/clone";
import { dataContacts } from "~src/modules/data";
import setDataToContext from "~src/utils/setDataToContext";

const contextContact = {
  nameContact: null,
  descriptionContact: null,
  dateTime: null,
  notificationCount: 0,
};

const contextContactsList = {
  contacts: setDataToContext(
    contextContact,
    contactTemplate,
    clone(6, dataContacts),
  ),
};

export default window.constructor(contextContactsList, contactsListTemplate);
