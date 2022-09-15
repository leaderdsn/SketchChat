import Block from "~src/utils/block";
import { P } from "~src/types";
import { BlockErrorPage } from "~src/pages/error/types";

export default class ErrorPage extends Block<BlockErrorPage> {
  constructor(props: BlockErrorPage) {
    super(props as P);
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
