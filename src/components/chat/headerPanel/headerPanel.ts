import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockHeaderPanel } from "~src/components/chat/headerPanel/types";
import Button from "~src/components/base/button";
import ExitChat from "~src/components/modals/exitChat/exitChat";

export default class HeaderPanel extends Block<BlockHeaderPanel> {
  constructor(props: BlockHeaderPanel) {
    super(props as P);
  }

  init() {
    const buttonLogout = new Button({
      id: null,
      className: "y-btn",
      typeButton: "button",
      events: {
        click: () => ExitChat.show(),
      },
      text: `
      <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"/>
      </svg>`,
    });

    this.children.controlButton = buttonLogout;
  }

  render() {
    return `
    <div class='y-header-panel'>
      <div class='y-header-panel__avatar'>{{avatarContent}}</div>
      <strong>{{contactName}}</strong>
      {{controlButton}}
    </div>
    `;
  }
}
