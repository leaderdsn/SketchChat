import { ProfileData } from "~src/api/profileAPI";
import ProfileController from "~src/controllers/profile";
import Button from "~src/components/base/button";
import Input from "~src/components/base/input";
import Piece from "~src/components/base/piece";
import Label from "~src/components/base/label";
import Link from "~src/components/base/link";
import BackIcon from "~src/components/icons/back";
import { ProfileChangeFormData } from "~src/components/profile/profileChange/types";
import UserAvatar from "~src/components/profile/userAvatar";
import ChangeUserAvatar from "~src/components/modals/changeUserAvatar";
import Profile, { withProfile } from "~src/pages/profile/profile";
import Block from "~src/utils/block";
import { blurValidate } from "~src/utils/validate";
import { P } from "~src/types";

export class ProfileChangePage extends Profile {
  constructor() {
    super({
      profile: new ProfileChange({}),
    });
  }
}

class ProfileChangeBase extends Block {
  protected init() {
    this.children = this.createProfileChange(this.props);
  }

  protected componentDidUpdate(_: P, user: P) {
    this.children = this.createProfileChange(user);
    return true;
  }

  private createProfileChange(user: P) {
    const formData: ProfileChangeFormData = {
      email: user.email,
      login: user.login,
      first_name: user.first_name,
      second_name: user.second_name,
      display_name: user.display_name,
      phone: user.phone,
    };

    const errorData: ProfileChangeFormData = {
      email: null,
      login: null,
      first_name: null,
      second_name: null,
      display_name: null,
      phone: null,
    };

    const setErrorData = () => {
      errorEmail.setProps({
        content: errorData.email,
      });

      errorLogin.setProps({
        content: errorData.login,
      });

      errorFirstName.setProps({
        content: errorData.first_name,
      });

      errorLastName.setProps({
        content: errorData.second_name,
      });

      errorDisplayName.setProps({
        content: errorData.display_name,
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
      content: errorData.first_name,
    });

    const errorLastName = new Piece({
      className: "y-field-error",
      content: errorData.second_name,
    });

    const errorDisplayName = new Piece({
      className: "y-field-error",
      content: errorData.display_name,
    });

    const errorPhone = new Piece({
      className: "y-field-error",
      content: errorData.phone,
    });

    const submit = async () => {
      blurValidate(formData, errorData, setErrorData);

      const isValid: Boolean = Object.entries(errorData).every(
        ([_, value]) => value === null
      );

      if (isValid) {
        await ProfileController.changeProfile(
          formData as unknown as ProfileData
        );
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
      placeholder: "",
      inputValue: formData.email,
      events: {
        input: (event) => inputHandler(event, "email"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const inputLogin = new Input({
      id: "loginProfile",
      typeInput: "text",
      className: "y-field-profile-control",
      inputName: "login",
      placeholder: "",
      inputValue: formData.login,
      events: {
        input: (event) => inputHandler(event, "login"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const inputFirstName = new Input({
      id: "firstNameProfile",
      typeInput: "text",
      className: "y-field-profile-control",
      inputName: "firstName",
      placeholder: "",
      inputValue: formData.first_name,
      events: {
        input: (event) => inputHandler(event, "first_name"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const inputSecondName = new Input({
      id: "lastNameProfile",
      typeInput: "text",
      className: "y-field-profile-control",
      inputName: "secondName",
      placeholder: "",
      inputValue: formData.second_name,
      events: {
        input: (event) => inputHandler(event, "second_name"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const inputDisplayName = new Input({
      id: "chatNameProfile",
      typeInput: "text",
      className: "y-field-profile-control",
      inputName: "displayName",
      placeholder: "",
      inputValue: formData.display_name,
      events: {
        input: (event) => inputHandler(event, "display_name"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const inputPhone = new Input({
      id: "phoneProfile",
      typeInput: "text",
      className: "y-field-profile-control",
      inputName: "phone",
      placeholder: "",
      inputValue: formData.phone,
      events: {
        input: (event) => inputHandler(event, "phone"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
    });

    const labelEmail = new Label({
      forName: "email",
      className: "y-field-profile-text",
      labelName: "Почта",
      input: inputEmail,
      error: null,
    });

    const labelLogin = new Label({
      forName: "login",
      className: "y-field-profile-text",
      labelName: "Логин",
      input: inputLogin,
      error: null,
    });

    const labelFirstName = new Label({
      forName: "firstName",
      className: "y-field-profile-text",
      labelName: "Имя",
      input: inputFirstName,
      error: null,
    });

    const labelSecondName = new Label({
      forName: "secondName",
      className: "y-field-profile-text",
      labelName: "Фамилия",
      input: inputSecondName,
      error: null,
    });

    const labelDisplayName = new Label({
      forName: "displayName",
      className: "y-field-profile-text",
      labelName: "Имя в чате",
      input: inputDisplayName,
      error: null,
    });

    const labelPhone = new Label({
      forName: "phone",
      className: "y-field-profile-text",
      labelName: "Телефон",
      input: inputPhone,
      error: null,
    });

    const buttonBack = new Button({
      id: null,
      className: "y-btn-back",
      typeButton: "button",
      text: BackIcon,
    });

    const linkBack = new Link({
      className: "y-nav-link",
      content: buttonBack,
      to: "/profile/profile-user",
    });

    const buttonSave = new Button({
      id: null,
      className: "y-btn-primary",
      typeButton: "button",
      text: "Сохранить",
      events: {
        click: submit,
      },
    });

    const showChangeAvatarModal = () => {
      ChangeUserAvatar.show();
    };

    const avatar = new UserAvatar({
      src: user.avatar,
      events: {
        click: () => showChangeAvatarModal(),
      },
    });

    return {
      back: linkBack,
      avatar: avatar,
      userName: user.first_name,
      content: [
        labelEmail,
        errorEmail,
        labelLogin,
        errorLogin,
        labelFirstName,
        errorFirstName,
        labelSecondName,
        errorLastName,
        labelDisplayName,
        errorDisplayName,
        labelPhone,
        errorPhone,
      ],
      action: buttonSave,
    };
  }

  render() {
    return `
    <div class='y-profile-change'>
      <div class='y-profile-change__back'>{{back}}</div>
      <div class='y-profile-change__content'>
        <div class='y-profile-change__avatar'>{{avatar}}</div>
        <div class='y-profile-change__username'>{{userName}}</div>
        <div class='y-profile-change__data'>{{content}}</div>
        <div class='y-profile-change__action'>{{action}}</div>
      </div>
    </div>
    `;
  }
}

export const ProfileChange = withProfile(ProfileChangeBase);
