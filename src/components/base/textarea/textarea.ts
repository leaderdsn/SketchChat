import { BlockTextarea } from "~src/components/base/textarea/types";
import Block from "~src/utils/block";

export default class Textarea extends Block<BlockTextarea> {
  constructor(props: BlockTextarea) {
    super(props as BlockTextarea);
  }

  public setValue(value: string) {
    return ((this.element as HTMLInputElement).value = value);
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  public getValue() {
    return (this.element as HTMLInputElement).value;
  }

  render() {
    return `
    <textarea 
      id='{{id}}' 
      class='{{className}}' 
      rows='{{rows}}' 
      cols='{{cols}}' 
      maxLength='{{length}}' 
      name='{{name}}' 
      placeholder='{{placeholder}}'
      value={{value}}
    ></textarea>
    `;
  }
}
