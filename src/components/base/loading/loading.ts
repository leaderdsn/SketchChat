import { P } from "~src/types";
import Block from "~src/utils/block";

export default class Loading extends Block {
  constructor(props: P) {
    super(props as P);
  }

  render() {
    return `
      <span class="y-loader"></span>
    `;
  }
}
