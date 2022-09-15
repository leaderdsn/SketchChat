import Block from "~src/utils/block";
import { BlockForm } from "~src/components/base/form/types";
import { P } from "~src/types";

export default class Form extends Block<BlockForm> {
  constructor(props: BlockForm) {
    super({ ...props, method: "post" } as P);
  }

  render() {
    return `
    <form method='{{method}}' class='{{className}}'>
      {{content}}
    </form>
    `;
  }
}
