import Block from "~src/utils/block";
import { BlockInput } from "~src/components/base/input/types";
import { P } from "~src/types";

export default class Input extends Block<BlockInput> {
  constructor(props: BlockInput) {
    super(props as P);
  }

  render() {
    return `
    <input id='{{id}}' type='{{typeInput}}' class='{{className}}' name='{{inputName}}' value='{{inputValue}}' placeholder='{{placeholder}}'>
    `;
  }
}
