import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockButton } from "./types";

export default class Button extends Block<BlockButton> {
  constructor(props: BlockButton) {
    super(props as P);
  }

  render() {
    return `
      <button 
        id='{{id}}' 
        class='{{className}}' 
        type='{{typeButton}}' 
        onClick='{{click}}'
      >
        {{text}}
      </button>
    `;
  }
}
