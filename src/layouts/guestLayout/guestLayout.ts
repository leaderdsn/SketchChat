import { BlockLayout } from "~src/layouts/types";
import Block from "~src/utils/block";

class GuestLayout extends Block {
  constructor(props: BlockLayout) {
    super(props as BlockLayout);
  }

  render() {
    return `
      <div class='guest-layout'>
        {{content}}
      </div>
    `;
  }
}

export default GuestLayout;
