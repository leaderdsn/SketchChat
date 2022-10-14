import { ChatsData } from "~src/api/chatsAPI";
import ChatsController from "~src/controllers/chats";
import Piece from "~src/components/base/piece/piece";
import Time from "~src/components/base/time/time";
import { Contact } from "~src/components/chat/contact/contact";
import UserAvatar from "~src/components/profile/userAvatar";
import withStore from "~src/utils/HOC/withStore";
import Block from "~src/utils/block";
import { P } from "~src/types";

class ContactsListBase extends Block {
  init() {
    this.children.contacts = this.props.chats
      ? this.createChats(this.props)
      : new Piece({
          className: "y-text-info",
          content: "Добавьте чат",
        });
  }

  componentDidUpdate(_: P, newProps: P) {
    this.children.contacts = this.createChats(newProps);
    return true;
  }

  private createChats({ chats }: P) {
    return chats.reverse().map((chat: ChatsData) => {
      return new Contact({
        ...chat,
        avatar: new UserAvatar({src: chat.avatar}),
        dateTime: new Time({
          time: chat.last_message ? chat.last_message.time : null
        }),
        content: chat.last_message ? chat.last_message.content : null,
        events: {
          click: () => {
            ChatsController.selectChat(chat.id);
          },
        },
      });
    });
  }

  render() {
    return `
      <div class='y-contacts-list'>
        {{contacts}}
      </div>
    `;
  }
}

const withChats = withStore((state) => ({ chats: [...(state.chats || [])] }));

export const ContactsList = withChats(ContactsListBase);
