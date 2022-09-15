import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockPiece } from "./types";

export default class Piece extends Block<BlockPiece> {
  constructor(props: BlockPiece) {
    super(props as P);
  }

  render() {
    return `
    <span class='{{className}}'>
      {{content}}
    </span>
    `;
  }
}
