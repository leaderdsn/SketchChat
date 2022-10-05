import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockLayout } from "~src/layouts/types";

class GuestLayout extends Block {
  constructor(props: BlockLayout) {
    super(props as P);
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
