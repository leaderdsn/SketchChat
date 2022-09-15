import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockChatArea } from "~src/components/chat/chatArea/types";
import HeaderPanel from "~src/components/chat/headerPanel/headerPanel";
import MessagesList from "~src/components/chat/messagesList/messagesList";
import SendPanel from "~src/components/chat/sendPanel/sendPanel";

export default class ChatArea extends Block<BlockChatArea> {
  constructor(props: BlockChatArea) {
    super(props as P);
  }

  init() {
    this.children = {
      headerPanel: new HeaderPanel({}),
      messagesList: new MessagesList({}),
      sendPanel: new SendPanel({}),
    };
  }

  render() {
    return `
    <div class='y-chat-area'>
      <div class='y-chat-area__header'>
        {{headerPanel}}
      </div>
      <div class='y-chat-area__body'>
        {{messagesList}}
      </div>
      <div class='y-chat-area__footer'>
        {{sendPanel}}
      </div>
    </div>
    `;
  }
}
