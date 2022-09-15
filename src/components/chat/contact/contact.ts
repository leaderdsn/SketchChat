import Block from "~src/utils/block";
import { P } from "~src/types";
import { BlockContact } from "~src/components/chat/contact/types";

export default class Contact extends Block<BlockContact> {
  constructor(props: BlockContact) {
    super(props as P);
  }

  render() {
    return `
    <div class='y-contact-item'>
    <div class='y-contact-item__avatar'></div>
    <div class='y-contact-item__data'>
      <strong class='y-contact-item__name'>{{nameContact}}</strong>
      <p class='y-contact-item__description'>{{descriptionContact}}</p>
    </div>
    <div class='y-contact-item__info'>
      <span class='y-contact-item__date-time'>{{dateTime}}</span>
      <span class='y-contact-item__notification-count'>{{notificationCount}}</span>
    </div>
  </div>
    `;
  }
}
