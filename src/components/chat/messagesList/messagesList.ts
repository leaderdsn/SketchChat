import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockMessagesList } from "~src/components/chat/messagesList/types";

export default class MessagesList extends Block<BlockMessagesList> {
  constructor(props: BlockMessagesList) {
    super(props as P);
  }

  render() {
    return `
    <div class='y-messages-list'>
      {{messages}}
    </div>
    `;
  }
}
