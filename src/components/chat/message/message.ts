import { MessageInfo } from '~src/controllers/messages';
import Block from '~src/utils/block';

export default class Message extends Block<MessageInfo> {
  constructor(props: MessageInfo) {
    super(props as MessageInfo);
  }

  render() {
    let isMine = ``;
    if (this.props.isMine) {
      isMine = 'y-message-item--mine';
    }
    return `
    <div class='y-message-item ${isMine}'>
      {{content}}
      <div class='y-message-item__date'>
        {{time}}
      </div>
    </div>
    `;
  }
}
