import Button from '~src/components/base/button';
import { BlockHeaderPanel } from '~src/components/chat/headerPanel/types';
import ExitIcon from '~src/components/icons/exit';
import ExitChat from '~src/components/modals/exitChat/exitChat';
import Block from '~src/utils/block';

export default class HeaderPanel extends Block<BlockHeaderPanel> {
  constructor(props: BlockHeaderPanel) {
    super(props as BlockHeaderPanel);
  }

  init() {
    const buttonLogout = new Button({
      id: null,
      className: 'y-btn',
      typeButton: 'button',
      events: {
        click: () => ExitChat.show(),
      },
      text: ExitIcon,
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
