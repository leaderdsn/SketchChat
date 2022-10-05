import { LoginAndSignup, P } from "~src/types";
import Block from "~src/utils/block";
import Button from "~src/components/base/button";
import Piece from "~src/components/base/piece";
import auth from "~src/controllers/auth";

class ExitChat extends Block {
  constructor(props: LoginAndSignup) {
    super(props as P);
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
    <div class='y-exit-chat-modal'>
      <div class='y-create-chat-modal__content'>
        <div class='y-create-chat-modal__header'>
          {{headerText}}
        </div>
        <div class='y-create-chat-modal__body'>
          {{form}}
        </div>
        <div class='y-create-chat-modal__footer'>
          {{content}}
        </div>
      </div>
    </div>
    `;
  }
}

export default new ExitChat({});
