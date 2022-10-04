import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockLayout } from "~src/layouts/types";
import ExitChat from "~src/components/modals/exitChat/exitChat";
import CreateChat from "~src/components/modals/createChat/createChat";
class MainLayout extends Block {
  constructor(props: BlockLayout) {
    super(props as P);
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
