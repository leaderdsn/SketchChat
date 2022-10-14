import { ChatsData, FormChatsData } from "~src/api/chatsAPI";
import ChatsController from "~src/controllers/chats";
import Button from "~src/components/base/button";
import Input from "~src/components/base/input";
import Form from "~src/components/base/form";
import Label from "~src/components/base/label";
import Block from "~src/utils/block";
import { LoginAndSignup } from "~src/types";

class CreateChat extends Block {
  constructor(props: LoginAndSignup) {
    super(props as LoginAndSignup);
  }

  init() {
    const formData: FormChatsData = {
      title: null,
    };

    this.setProps({ headerText: "Создать чат" });

    const inputHandler = (e: Event, key: string) => {
      formData[key as unknown as number] = (
        e.target! as HTMLInputElement
      ).value;
    };

    const clearForm = () => {
      Object.entries(formData).forEach(([key]) => {
        formData[key as unknown as number] = null;
      });
      inputTitle.setProps({
        ...this.props,
        inputValue: null,
      });
    };

    const submit = async () => {
      await ChatsController.createChat(formData as ChatsData);
      clearForm();
      this.hide();
    };

    const inputTitle = new Input({
      id: "form-title",
      typeInput: "text",
      className: "y-field-control",
      inputName: "title",
      placeholder: null,
      events: {
        input: (event) => inputHandler(event, "title"),
      },
      inputValue: null,
    });

    const labelTitle = new Label({
      forName: "title",
      labelName: "Название",
      className: "y-field-text",
      input: inputTitle,
    });

    const buttonClose = new Button({
      id: null,
      className: "y-btn",
      typeButton: "button",
      events: {
        click: () => this.hide(),
      },
      text: "Закрыть",
    });

    const buttonCreate = new Button({
      id: null,
      className: "y-btn-primary",
      typeButton: "button",
      events: {
        click: submit,
      },
      text: "Создать",
    });

    const form = new Form({
      method: "POST",
      className: "y-login-page__form",
      content: [labelTitle],
    });

    this.children.form = form;

    this.children.content = [buttonCreate, buttonClose];
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

export default new CreateChat({});
