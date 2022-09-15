import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockMessagesList } from "~src/components/chat/messagesList/types";
import Message from "~src/components/chat/message/message";

export default class MessagesList extends Block<BlockMessagesList> {
  constructor(props: BlockMessagesList) {
    super(props as P);
  }

  init() {
    const message: Block = new Message({
      author: "Валера",
      content: "Привет! Как у тебя дела?",
      date: "15:44",
    });
    const message2: Block = new Message({
      author: "Андрей",
      content: "Привет! Отлично! Второй спринт сдал =)",
      date: "15:44",
    });

    this.children.messages = [message, message2];
  }

  render() {
    return `
    <div class='y-messages-list'>
      {{messages}}
    </div>
    `;
  }
}
