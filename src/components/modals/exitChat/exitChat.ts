import auth from "~src/controllers/auth";
import Button from "~src/components/base/button";
import Piece from "~src/components/base/piece";
import Block from "~src/utils/block";
import { LoginAndSignup } from "~src/types";

class ExitChat extends Block {
  constructor(props: LoginAndSignup) {
    super(props as LoginAndSignup);
  }

  init() {
    this.setProps({ headerText: "Выход из чата" });

    const buttonCancel = new Button({
      id: null,
      className: "y-btn",
      typeButton: "button",
      events: {
        click: () => this.hide(),
      },
      text: "Отмена",
    });

    const buttonExit = new Button({
      id: null,
      className: "y-btn-primary",
      typeButton: "button",
      events: {
        click: () => {
          auth.logout();
          this.hide();
        },
      },
      text: "Выйти",
    });

    this.children.form = new Piece({
      className: "y-text-description",
      content: "Вы действительно хотите выйти?",
    });

    this.children.content = [buttonExit, buttonCancel];
  }

  render() {
    return `
    <div class='y-modal'>
      <div class='y-modal__content'>
        <div class='y-modal__header'>
          {{headerText}}
        </div>
        <div class='y-modal__body'>
          {{form}}
        </div>
        <div class='y-modal__footer two-column'>
          {{content}}
        </div>
      </div>
    </div>
    `;
  }
}

export default new ExitChat({});
