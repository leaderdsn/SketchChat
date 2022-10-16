import { BlockErrorPage } from '~src/pages/error/types';
import Block from '~src/utils/block';

export default class ErrorPage extends Block<BlockErrorPage> {
  constructor(props: BlockErrorPage) {
    super(props as BlockErrorPage);
  }

  render() {
    return `
    <div class='y-error-page'>
      <h1 class='y-error-page__error'>{{numberError}}</h1>
      <h2 class='y-error-page__message'>{{textMessage}}</h2>
      {{content}}
    </div>
    `;
  }
}
