import Block from "~src/utils/block";
import { BlockTextarea } from "~src/components/base/textarea/types";

export default class Textarea extends Block<BlockTextarea> {
  constructor(props: BlockTextarea) {
    console.log(props)
    super(props as unknown as  Record<string, Block<BlockTextarea>>);
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
