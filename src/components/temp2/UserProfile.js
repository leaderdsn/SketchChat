import Block from "~src/modules/block";
import Button from "~src/components/temp/Button";
// Ваш реализованный шаблонизатор
import constructor from "~src/modules/constructor";
import { profileTemplate } from "./profileTemplate";

const handleClick = (event) => {
  console.log(event, 'jopa');
}

// const contextButton = {
//   handleClick: handleClick,
//   text: 'Click me',
//   settings: {withInternalID: true},
// }

// const button = new Button(
//   contextButton
// );

export default class UserProfile extends Block {
  constructor(props) {
    // Создаём враппер DOM-элемент button
    super("div", props);

    this.children.button = new Button({
      text: this.props.buttonText
    });
  }

  componentDidUpdate(oldProps, newProps) {
    if (oldProps.buttonText !== newProps.buttonText) {
      this.children.button.setProps({ text: newProps.buttonText });
    }

    return true;
  }

  render() {
    return this.compile(profileTemplate, {
      userName: this.props.userName,
      button: this.button,
    });
  }
}