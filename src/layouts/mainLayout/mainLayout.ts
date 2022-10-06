import ExitChat from "~src/components/modals/exitChat/exitChat";
import CreateChat from "~src/components/modals/createChat/createChat";
import { BlockLayout } from "~src/layouts/types";
import Block from "~src/utils/block";
class MainLayout extends Block {
  constructor(props: BlockLayout) {
    super(props as BlockLayout);
  }

  init() {
    this.children.modals = [CreateChat, ExitChat];
  }

  render() {
    return `
      <div class='main-layout'>
        {{content}}
        {{modals}}
      </div>
    `;
  }
}

export default MainLayout;
