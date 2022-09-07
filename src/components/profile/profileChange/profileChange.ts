import { P } from "~src/types";
import Block from "~src/utils/block";
import Button from "~src/components/base/button";
import Label from "~src/components/base/label";
import UserAvatar from "~src/components/profile/userAvatar";
import Input from "~src/components/base/input";
import validate from "~src/utils/validate";
import Piece from "~src/components/base/piece";
import { BlockProfileChange } from "~src/components/profile/types";
import { ProfileChangeFormData } from "~src/components/profile/profileChange/types";

export default class ProfileChange extends Block<BlockProfileChange> {
  constructor(props: BlockProfileChange) {
    super(props as P);
  }

  init() {
    const formData: ProfileChangeFormData = {
      email: "pochta@yandex.ru",
      login: "ivanivanov",
      firstName: "Иван",
      lastName: "Иванов",
      chatName: "Иван",
      phone: "+7(909)967-30-30",
    };

    const errorData: ProfileChangeFormData = {
      email: null,
      login: null,
      firstName: null,
      lastName: null,
      chatName: null,
      phone: null,
    };

    const backHandler = () => {
      document.location.pathname = "/profile/profile-user";
    };

    const setErrorData = () => {
      errorEmail.setProps({
        content: errorData.email,
      });

      errorLogin.setProps({
        content: errorData.login,
      });

      errorFirstName.setProps({
        content: errorData.firstName,
      });

      errorLastName.setProps({
        content: errorData.lastName,
      });

      errorPhone.setProps({
        content: errorData.phone,
      });
    };

    const errorEmail = new Piece({
      className: "y-field-error",
      content: errorData.email,
    });

    const errorLogin = new Piece({
      className: "y-field-error",
      content: errorData.login,
    });

    const errorFirstName = new Piece({
      className: "y-field-error",
      content: errorData.firstName,
    });

    const errorLastName = new Piece({
      className: "y-field-error",
      content: errorData.lastName,
    });

    const errorChatName = new Piece({
      className: "y-field-error",
      content: errorData.chatName,
    });

    const errorPhone = new Piece({
      className: "y-field-error",
      content: errorData.phone,
    });

    const submit = () => {
      Object.entries(formData).forEach(([key, value]) => {
        errorData[key as unknown as number] = validate(value, key);
      });

      setErrorData();

      const isValid: Boolean = Object.entries(errorData).every(
        ([_, value]) => value === null
      );
      if (isValid) {
        alert("Пороль успешно изменён!");
      } else {
        alert("Проверьте правильность заполнения полей!");
      }
    };

    const inputHandler = (e: Event, key: string) => {
      formData[key as unknown as number] = (
        e.target! as HTMLInputElement
      ).value;
    };

    const inputEmail = new Input({
      id: "emailProfile",
      typeInput: "text",
      className: "y-field-profile-control",
      inputName: "email",
      inputValue: formData.email,
      events: {
        input: (event) => inputHandler(event, "email"),
      },
    });

    const inputLogin = new Input({
      id: "loginProfile",
      typeInput: "text",
      className: "y-field-profile-control",
      inputName: "login",
      inputValue: formData.login,
      events: {
        input: (event) => inputHandler(event, "login"),
      },
    });

    const inputFirstName = new Input({
      id: "firstNameProfile",
      typeInput: "text",
      className: "y-field-profile-control",
      inputName: "firstName",
      inputValue: formData.firstName,
      events: {
        input: (event) => inputHandler(event, "firstName"),
      },
    });

    const inputLastName = new Input({
      id: "lastNameProfile",
      typeInput: "text",
      className: "y-field-profile-control",
      inputName: "lastName",
      inputValue: formData.lastName,
      events: {
        input: (event) => inputHandler(event, "lastNmae"),
      },
    });

    const inputChatName = new Input({
      id: "chatNameProfile",
      typeInput: "text",
      className: "y-field-profile-control",
      inputName: "chatName",
      inputValue: formData.chatName,
      events: {
        input: (event) => inputHandler(event, "chatName"),
      },
    });

    const inputPhone = new Input({
      id: "phoneProfile",
      typeInput: "text",
      className: "y-field-profile-control",
      inputName: "phone",
      inputValue: formData.phone,
      events: {
        input: (event) => inputHandler(event, "phone"),
      },
    });

    const labelEmail = new Label({
      forName: "email",
      className: "y-field-profile-text",
      labelName: "Почта",
      input: inputEmail,
    });

    const labelLogin = new Label({
      forName: "login",
      className: "y-field-profile-text",
      labelName: "Логин",
      input: inputLogin,
    });

    const labelFirstName = new Label({
      forName: "firstName",
      className: "y-field-profile-text",
      labelName: "Имя",
      input: inputFirstName,
    });

    const labelLastName = new Label({
      forName: "lastName",
      className: "y-field-profile-text",
      labelName: "Фамилия",
      input: inputLastName,
    });

    const labelChatName = new Label({
      forName: "chatName",
      className: "y-field-profile-text",
      labelName: "Имя в чате",
      input: inputChatName,
    });

    const labelPhone = new Label({
      forName: "phone",
      className: "y-field-profile-text",
      labelName: "Телефон",
      input: inputPhone,
    });

    const buttonBack = new Button({
      className: "y-btn-back",
      typeButton: "button",
      text: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>
        <rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>
        <path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>
      </svg>`,
      events: {
        click: backHandler,
      },
    });

    const buttonSave = new Button({
      className: "y-btn",
      typeButton: "button",
      text: "Сохранить",
      events: {
        click: submit,
      },
    });

    const avatar = new UserAvatar({
      img: "",
      userName: "Иван",
    });

    this.children = {
      back: buttonBack,
      avatar: avatar,
      content: [
        labelEmail,
        errorEmail,
        labelLogin,
        errorLogin,
        labelFirstName,
        errorFirstName,
        labelLastName,
        errorLastName,
        labelChatName,
        errorChatName,
        labelPhone,
        errorPhone,
      ],
      action: buttonSave,
    };
  }

  render() {
    return `
    <div class='y-profile'>
      <div class='y-profile__back'>{{back}}</div>
      <div class='y-profile__content'>
        <div class='y-profile__avatar'>{{avatar}}</div>
        <div class='y-profile__data'>{{content}}</div>
        <div class='y-profile__action'>{{action}}</div>
      </div>
    </div>
    `;
  }
}