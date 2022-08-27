import contactsListTemplate from "~src/components/chat/contactsList/contactsList.tmpl";
import contactTemplate from "~src/components/chat/contact/contact.tmpl";
import clone from "~src/utils/clone";
import { dataContacts } from "~src/modules/data";
import setDataToContext from "~src/utils/setDataToContext";
import constructor from "~src/modules/constructor"

type TContextContact = {
  nameContact: string | null,
  descriptionContact: string | null,
  dateTime: Date | string | null,
  notificationCount: number | null
}

type TContextContactsList = {
  contacts: string[],
}

const contextContact: TContextContact = {
  nameContact: null,
  descriptionContact: null,
  dateTime: null,
  notificationCount: 0,
};

const contextContactsList: TContextContactsList = {
  contacts: setDataToContext(
    contextContact,
    contactTemplate,
    clone(6, dataContacts),
  ),
};

export default constructor(contextContactsList, contactsListTemplate);
