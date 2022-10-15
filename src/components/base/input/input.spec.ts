import { expect } from 'chai';
import Input from './input';

describe('Input', () => {
  const props = {
    id: null,
    typeInput: 'text',
    className: 'y-input',
    inputName: 'name',
    placeholder: null,
    events: null,
    inputValue: null,
  };

  it('should render', () => {
    return new Input(props);
  });

  it('element should return input', () => {
    const input = new Input(props);
    const element = input.element;

    expect(element).to.be.instanceof(window.HTMLInputElement);
  });

  it('.setValue() should write the value', () => {
    const input = new Input(props);
    input.setValue('value');
    input.getValue();

    expect(input.getValue()).to.eq('value');
  });

  it('.getName() should read the name', () => {
    const input = new Input({ ...props, inputName: 'name' });

    expect(input.getName()).to.eq('name');
  });
});
