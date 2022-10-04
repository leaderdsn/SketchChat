import Block from "~src/utils/block";
import { Contact } from "~src/components/chat/contact/contact";
import withStore from "~src/utils/HOC/withStore";
import { ChatsData } from "~src/api/chatsAPI";
import { P } from "~src/types";
import ChatsController from "~src/controllers/chats";
import Piece from "~src/components/base/piece/piece";

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
    chats.reverse();
    return chats.map((chat: ChatsData) => {
      return new Contact({
        ...chat,
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
