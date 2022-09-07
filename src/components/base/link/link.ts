import Block from "~src/utils/block";
import { BlockLink } from "~src/components/base/link/types";
import { P } from "~src/types";

export default class Link extends Block<BlockLink> {
  constructor(props: BlockLink) {
    super(props as P);
  }

  render() {
    return `
    <a id='{{id}}' class='{{className}}' href='{{src}}'>
      {{textLink}}
    </a>
    `;
  }
}
