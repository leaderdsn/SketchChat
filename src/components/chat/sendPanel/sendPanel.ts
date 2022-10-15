import { BlockSendPanel } from '~src/components/chat/sendPanel/types';
import Block from '~src/utils/block';

export default class SendPanel extends Block<BlockSendPanel> {
  constructor(props: BlockSendPanel) {
    super(props as BlockSendPanel);
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
