import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockHeaderPanel } from "~src/components/chat/headerPanel/types";

export default class HeaderPanel extends Block<BlockHeaderPanel> {
  constructor(props: BlockHeaderPanel) {
    super(props as P);
  }

  init() {
    this.setProps({
      avatarContent: "А",
      contactName: "Алёна",
      controlButton: null,
    });
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
