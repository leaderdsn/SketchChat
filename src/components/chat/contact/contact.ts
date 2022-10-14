import { ChatsData } from "~src/api/chatsAPI";
import { BlockContact } from "~src/components/chat/contact/types";
import withStore from "~src/utils/HOC/withStore";
import Block from "~src/utils/block";
import { P } from "~src/types";

class ContactBase extends Block<BlockContact> {
  constructor(props: BlockContact) {
    super(props as BlockContact);
  }

  render() {
    const { unread_count, selectedChat, id } = this.props;

    return `
        <div class='y-contact-item
            ${id === selectedChat?.id ? " is-selected" : ""}'>
          <div class='y-contact-item__avatar'>
            {{avatar}}
          </div>
          <div class='y-contact-item__data'>
            <strong class='y-contact-item__name'>{{title}}</strong>
            <p class='y-contact-item__description'>{{content}}</p>
          </div>
          <div class='y-contact-item__info'>
            {{dateTime}}
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

export const Contact = withSelectedContact(ContactBase as P);
