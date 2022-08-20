import contactsListTemplate from "~src/components/chat/contactsList/contactsList.tmpl";
import contactTemplate from "~src/components/chat/contact/contact.tmpl";
import clone from "~src/utils/clone";
import { dataContacts } from "~src/modules/data";
import setDataToContext from "~src/utils/setDataToContext";

const contextContact = {
  classNameContact: "y-contact-item",
  classNameAvatar: "y-contact-item__avatar",
  classNameDescription: "y-contact-item__description",
  nameContact: null,
  descriptionContact: null,
  classNameInfo: "y-contact-item__info",
  classNameDateTime: "y-contact-item__date-time",
  dateTime: null,
  classNameNotificationCount: "y-contact-item__notification-count",
  notificationCount: 0,
};

const contextContactsList = {
  className: "y-contacts-list",
  contacts: setDataToContext(
    contextContact,
    contactTemplate,
    clone(6, dataContacts),
  ),
};

export default window.constructor(contextContactsList, contactsListTemplate);
