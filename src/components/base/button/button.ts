import { BlockButton } from '~src/components/base/button/types';
import Block from '~src/utils/block';

export default class Button extends Block<BlockButton> {
  constructor(props: BlockButton) {
    super(props as BlockButton);
  }

  render() {
    return `
      <button
        id='{{id}}'
        class='{{className}}'
        type='{{typeButton}}'
      >
        {{text}}
      </button>
    `;
  }
}
