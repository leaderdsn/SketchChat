import contactsListTemplate from "./contactsList.tmpl";
import constructor from "../../../modules/constructor";
import contactTemplate from "../contact/contact.tmpl";
import clone from "../../../utils/clone"
import { dataContacts } from "../../../modules/data"

const setDataToContext = (context, template, data) => {
  let res = [];
  data.forEach((item) => {
    context.nameContact = item.nameContact;
    context.descriptionContact = item.descriptionContact;
    context.dateTime = item.dateTime;
    context.notificationCount = item.notificationCount;
    res.push(constructor(context, template));
  })
  res = res.filter(function(item) {
    return item !== "\n";
  }).map(function(item) {
    return item.replace(/\n/g,'');
  }).join('');
  return res;
}

const contextContact = {
  classNameContact: 'y-contact-item',
  classNameAvatar: 'y-contact-item__avatar',
  classNameDescription: 'y-contact-item__description',
  nameContact: null,
  descriptionContact: null,
  classNameInfo: 'y-contact-item__info',
  classNameDateTime: 'y-contact-item__date-time',
  dateTime: null,
  classNameNotificationCount: 'y-contact-item__notification-count',
  notificationCount: 0,
}

const contextContactsList = {
  className: 'y-contacts-list',
  contacts: setDataToContext(contextContact, contactTemplate, clone(6, dataContacts))
}

export default constructor(contextContactsList, contactsListTemplate);