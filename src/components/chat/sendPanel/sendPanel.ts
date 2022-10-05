import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockSendPanel } from "~src/components/chat/sendPanel/types";

export default class SendPanel extends Block<BlockSendPanel> {
  constructor(props: BlockSendPanel) {
    super(props as P);
  }

  render() {
    return `
    <div class='y-send-panel'>
      {{upload}}
      {{textArea}}
      {{sendButton}}
    </div>
    `;
  }
}
