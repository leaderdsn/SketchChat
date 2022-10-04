import Block from "~src/utils/block";
import withStore from "~src/utils/HOC/withStore";
import getTime from "~src/utils/getTime";
import { ChatsData } from "~src/api/chatsAPI";

class ContactBase extends Block {
  init() {
    const { avatar, last_message } = this.props;
    const url = "https://ya-praktikum.tech/api/v2/resources";

    this.setProps({
      ...this.props,
      avatar: avatar ? url + avatar : null,
      dateTime: last_message
        ? getTime(last_message.time as unknown as Date)
        : null,
      content: last_message ? last_message.content : null,
    });
  }

  render() {
    const { avatar, unread_count, selectedChat, id } = this.props;

    return `
        <div class='y-contact-item
            ${id === selectedChat?.id ? " is-selected" : ""}'>
          <div class='y-contact-item__avatar'>
            ${
              avatar
                ? `<img src='{{avatar}}' alt='{{title}}'>`
                : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none"/>
                    <circle cx="128" cy="96" r="64" fill="none" stroke="#999999" stroke-miterlimit="10" stroke-width="16"/>
                    <path fill="none" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"/>
                  </svg>
                `
            }
          </div>
          <div class='y-contact-item__data'>
            <strong class='y-contact-item__name'>{{title}}</strong>
            <p class='y-contact-item__description'>{{description}}</p>
          </div>
          <div class='y-contact-item__info'>
            <span class='y-contact-item__date-time'>{{dateTime}}</span>
            ${
              unread_count > 0
                ? `<span class='y-contact-item__notification-count'>{{unread_count}}</span>`
                : ""
            }
          </div>
        </div>
        `;
  }
}

export const withSelectedContact = withStore((state) => {
  return {
    selectedChat: (state.chats || []).find(({ id }: ChatsData) => {
      return id === state.selectedChat;
    }),
  };
});

export const Contact = withSelectedContact(ContactBase);
