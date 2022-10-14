import { BlockLabel } from "~src/components/base/label/types";
import Block from "~src/utils/block";

export default class Label extends Block<BlockLabel> {
  constructor(props: BlockLabel) {
    super(props as BlockLabel);
  }

  render() {
    return `
    <label for='{{forName}}' class='{{className}}'> 
      <span>{{labelName}}</span>
      {{input}}
      {{error}}
    </label>
    `;
  }
}
