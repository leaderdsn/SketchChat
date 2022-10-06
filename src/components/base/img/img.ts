import { BlockImg } from "~src/components/base/img/types";
import Block from "~src/utils/block";

export default class Img extends Block<BlockImg> {
  constructor(props: BlockImg) {
    super(props as BlockImg);
  }

  render() {
    return `<img src='{{src}}' alt='{{alt}}' />`;
  }
}
