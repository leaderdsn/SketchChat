import Block from "~src/modules/block";
// Ваш реализованный шаблонизатор
import constructor from "~src/modules/constructor";
import { template } from "./template";

export default class Button extends Block {
  constructor(props) {
    // Создаём враппер DOM-элемент button
    super("button", props);
  }

  render() {
    // В данном случае render возвращает строкой разметку из шаблонизатора
    return this.compile(template, this.props);
  }
} 