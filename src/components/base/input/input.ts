import Block from "~src/utils/block";
import { BlockInput } from "~src/components/base/input/types";
import { P } from "~src/types";

export default class Input extends Block<BlockInput> {
  constructor(props: BlockInput) {
    super(props as P);
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
