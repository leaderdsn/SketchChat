import { BlockPiece } from '~src/components/base/piece/types';
import Block from '~src/utils/block';

export default class Piece extends Block<BlockPiece> {
  constructor(props: BlockPiece) {
    super(props as BlockPiece);
  }

  render() {
    return `
    <span class='{{className}}'>
      {{content}}
    </span>
    `;
  }
}
