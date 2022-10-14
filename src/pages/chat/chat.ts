import ChatArea from "~src/components/chat/chatArea";
import Sidebar from "~src/components/chat/sidebar/sidebar";
import MainLayout from "~src/layouts/mainLayout/mainLayout";
import { BlockChat } from "~src/pages/chat/types";
import Block from "~src/utils/block";

export class ChatPage extends MainLayout {
  constructor() {
    super({
      content: new Chat({}),
    });
  }
}
export default class Chat extends Block<BlockChat> {
  constructor(props: BlockChat) {
    super(props as BlockChat);
  }

  init() {
    this.children.sidebar = new Sidebar({});
    this.children.chatArea = new ChatArea({});
  }

  render() {
    return `
    <div class='y-chat-page'>
      {{sidebar}}
      {{chatArea}}
    </div>
    `;
  }
}
