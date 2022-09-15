import Block from '~src/utils/block';
import { BlockTextarea } from '~src/components/base/textarea/types';
import { P } from '~src/types';

export default class Textarea extends Block<BlockTextarea> {
  constructor(props: BlockTextarea) {
    super(props as P);
  }

  render() {
    return `
    <textarea id='{{id}}' class='{{className}}' rows='{{rows}}' cols='{{cols}}' maxLength='{{length}}' name='{{name}}' placeholder='{{placeholder}}'></textarea>
    `
  } 
}
