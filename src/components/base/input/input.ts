import { BlockInput } from "~src/components/base/input/types";
import Block from "~src/utils/block";

export default class Input extends Block<BlockInput> {
  constructor(props: BlockInput) {
    super(props as BlockInput);
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
    <input 
      id='{{id}}'
      type='{{typeInput}}'
      class='{{className}}'
      name='{{inputName}}'
      value='{{inputValue}}'
      placeholder='{{placeholder}}'
    >
    `;
  }
}
