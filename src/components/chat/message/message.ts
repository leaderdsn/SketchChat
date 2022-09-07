import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockMessage } from "~src/components/chat/message/types";

export default class Message extends Block<BlockMessage> {
  constructor(props: BlockMessage) {
    super(props as P);
  }

  render() {
    return `
    <div class='y-message-item'>
      {{content}}
      <div class='y-message-item__date'>
        {{date}}
      </div>
    </div>
    `;
  }
}
