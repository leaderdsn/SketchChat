import ChatArea from '~src/components/chat/chatArea';
import Sidebar from '~src/components/chat/sidebar/sidebar';
import { BlockChat } from '~src/pages/chat/types';
import Block from '~src/utils/block';
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
