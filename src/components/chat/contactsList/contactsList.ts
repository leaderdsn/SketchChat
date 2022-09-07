import Block from "~src/utils/block";
import { P } from "~src/types";
import { BlockContactsList } from "~src/components/chat/contactsList/types";
import Contact from "~src/components/chat/contact/contact";

export default class ContactsList extends Block<BlockContactsList> {
  constructor(props: BlockContactsList) {
    super(props as P);
  }

  init() {
    const contact = new Contact({
      nameContact: "Пётр",
      descriptionContact: "Хай! Вай!",
      dateTime: "11:22",
      notificationCount: 5,
      events: {
        click: () => (document.location.pathname = "/error-server"),
      },
    });
    const contact2 = new Contact({
      nameContact: "Пётр",
      descriptionContact: "Хай! Вай!",
      dateTime: "11:22",
      notificationCount: 1,
      events: {
        click: () => (document.location.pathname = "/error-request"),
      },
    });

    this.children.contacts = [contact, contact2];
  }

  render() {
    return `
    <div class='y-contacts-list'>
      {{contacts}}
    </div>
    `;
  }
}
