import Block from "~src/utils/block";
import { BlockLabel } from "~src/components/base/label/types";
import { P } from "~src/types";

export default class Label extends Block<BlockLabel> {
  constructor(props: BlockLabel) {
    super(props as P);
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
