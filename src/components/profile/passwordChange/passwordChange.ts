import { P } from "~src/types";
import Block from "~src/utils/block";
import Button from "~src/components/base/button";
import Label from "~src/components/base/label";
import UserAvatar from "~src/components/profile/userAvatar";
import { PasswordChangeFormData } from "~src/components/profile/passwordChange/types";
import Input from "~src/components/base/input";
import validate from "~src/utils/validate";
import Piece from "~src/components/base/piece";
import { BlockProfileChange } from "~src/components/profile/types";

export default class PasswordChange extends Block<BlockProfileChange> {
  constructor(props: BlockProfileChange) {
    super(props as P);
  }

  init() {
    const formData: PasswordChangeFormData = {
      oldPassword: null,
      password: null,
      repeatPassword: null,
    };

    const errorData: PasswordChangeFormData = {
      oldPassword: null,
      password: null,
      repeatPassword: null,
    };

    const backHandler = () => {
      document.location.pathname = "/profile/profile-user";
    };

    const setErrorData = () => {
      errorOldPassword.setProps({
        content: errorData.oldPassword,
      });

      errorNewPassword.setProps({
        content: errorData.password,
      });

      errorRepeatNewPassword.setProps({
        content: errorData.repeatPassword,
      });
    };

    const resetForm = () => {
      Object.entries(formData).map(([key, _]) => {
        formData[key as unknown as number] = null;
      });
    };

    const blurValidate = () => {
      Object.entries(formData).forEach(([key, value]) => {
        errorData[key as unknown as number] = validate(value, key)
      })
      setErrorData()
    }

    const submit = () => {
      console.log('form-data: ', formData)

      const isValid: Boolean = Object.entries(errorData).every(
        ([_, value]) => value === null
      );
      if (isValid) {
        alert("Пороль успешно изменён!");
        resetForm();
      } else {
        alert("Проверьте правильность заполнения полей!");
      }
    };

    const inputHandler = (e: Event, key: string) => {
      formData[key as unknown as number] = (
        e.target! as HTMLInputElement
      ).value;
    };

    const errorOldPassword = new Piece({
      className: "y-field-error",
      content: errorData.oldPassword,
    });

    const errorNewPassword = new Piece({
      className: "y-field-error",
      content: errorData.oldPassword,
    });

    const errorRepeatNewPassword = new Piece({
      className: "y-field-error",
      content: errorData.oldPassword,
    });

    const inputOldPassword = new Input({
      id: "oldPassword",
      typeInput: "password",
      className: "y-field-profile-control",
      inputName: "oldPassword",
      placeholder: "",
      events: {
        input: (event) => inputHandler(event, "oldPassword"),
        blur: blurValidate,
      },
    });

    const inputNewPassword = new Input({
      id: "newPassword",
      typeInput: "password",
      className: "y-field-profile-control",
      inputName: "newPassword",
      placeholder: "",
      events: {
        input: (event) => inputHandler(event, "password"),
        blur: blurValidate,
      },
    });

    const inputRepeatNewPassword = new Input({
      id: "repeatNewPassword",
      typeInput: "password",
      className: "y-field-profile-control",
      inputName: "repeatNewPassword",
      placeholder: "",
      events: {
        input: (event) => inputHandler(event, "repeatPassword"),
        blur: blurValidate,
      },
    });

    const labelOldPassword = new Label({
      forName: "oldPassword",
      className: "y-field-profile-text",
      labelName: "Старый пароль",
      input: inputOldPassword,
    });

    const labelNewPassword = new Label({
      forName: "newPassword",
      className: "y-field-profile-text",
      labelName: "Новый пароль",
      input: inputNewPassword,
    });

    const labelRepeatNewPassword = new Label({
      forName: "repeatNewPassword",
      className: "y-field-profile-text",
      labelName: "Повторите новый пароль",
      input: inputRepeatNewPassword,
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
        labelOldPassword,
        errorOldPassword,
        labelNewPassword,
        errorNewPassword,
        labelRepeatNewPassword,
        errorRepeatNewPassword,
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
