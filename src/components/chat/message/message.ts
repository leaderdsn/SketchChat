import { MessageInfo } from "~src/controllers/messages";
import { P } from "~src/types";
import Block from "~src/utils/block";
import getTime from "~src/utils/getTime";

export default class Message extends Block<MessageInfo> {
  constructor(props: MessageInfo) {
    super(props as P);
  }

  init() {
    const { time } = this.props;
    this.setProps({
      ...this.props,
      time: time ? getTime(time as unknown as Date) : null,
    });
  }

  render() {
    let isMine = ``;
    if (this.props.isMine) {
      isMine = "y-message-item--mine";
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
