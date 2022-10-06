import { BlockForm } from "~src/components/base/form/types";
import Block from "~src/utils/block";

export default class Form extends Block<BlockForm> {
  constructor(props: BlockForm) {
    super({ ...props, method: "post" } as BlockForm);
  }

  render() {
    return `
    <form method='{{method}}' class='{{className}}'>
      {{content}}
    </form>
    `;
  }
}
