import ProfileController from "~src/controllers/profile";
import Button from "~src/components/base/button";
import Input from "~src/components/base/input";
import Label from "~src/components/base/label";
import Link from "~src/components/base/link";
import BackIcon from "~src/components/icons/back";
import Piece from "~src/components/base/piece";
import UserAvatar from "~src/components/profile/userAvatar";
import { PasswordChangeFormData } from "~src/components/profile/passwordChange/types";
import Profile, { withProfile } from "~src/pages/profile/profile";
import Block from "~src/utils/block";
import { blurValidate } from "~src/utils/validate";
import { P } from "~src/types";

export class ProfilePasswordChangePage extends Profile {
  constructor() {
    super({
      profile: new ProfilePasswordChange({}),
    });
  }
}
class ProfilePasswordChangeBase extends Block {
  protected init() {
    this.children = this.createProfilePasswordChange(this.props);
  }

  protected componentDidUpdate(_: P, user: P) {
    this.children = this.createProfilePasswordChange(user);
    return true;
  }

  private createProfilePasswordChange(user: P) {
    const formData: PasswordChangeFormData = {
      oldPassword: null,
      newPassword: null,
      repeatPassword: null,
    };

    const errorData: PasswordChangeFormData = {
      oldPassword: null,
      newPassword: null,
      repeatPassword: null,
    };

    const setErrorData = () => {
      errorOldPassword.setProps({
        content: errorData.oldPassword,
      });

      errorNewPassword.setProps({
        content: errorData.newPassword,
      });

      errorRepeatNewPassword.setProps({
        content: errorData.repeatPassword,
      });
    };

    const resetForm = () => {
      Object.entries(formData).map(([key, _]) => {
        formData[key as unknown as number] = null;
      });
      inputOldPassword.setProps({
        ...this.props,
        inputValue: null,
      });
      inputNewPassword.setProps({
        ...this.props,
        inputValue: null,
      });
      inputRepeatNewPassword.setProps({
        ...this.props,
        inputValue: null,
      });
    };

    const submit = async () => {
      blurValidate(formData, errorData, setErrorData);

      const isValid: Boolean = Object.entries(errorData).every(
        ([_, value]) => value === null
      );

      if (isValid) {
        const { oldPassword, newPassword } = formData;

        await ProfileController.changePassword({
          oldPassword: oldPassword,
          newPassword: newPassword,
        });

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
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
      inputValue: null,
    });

    const inputNewPassword = new Input({
      id: "newPassword",
      typeInput: "password",
      className: "y-field-profile-control",
      inputName: "newPassword",
      placeholder: "",
      events: {
        input: (event) => inputHandler(event, "newPassword"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
      inputValue: null,
    });

    const inputRepeatNewPassword = new Input({
      id: "repeatNewPassword",
      typeInput: "password",
      className: "y-field-profile-control",
      inputName: "repeatNewPassword",
      placeholder: "",
      events: {
        input: (event) => inputHandler(event, "repeatPassword"),
        blur: () => blurValidate(formData, errorData, setErrorData),
      },
      inputValue: null,
    });

    const labelOldPassword = new Label({
      forName: "oldPassword",
      className: "y-field-profile-text",
      labelName: "Старый пароль",
      input: inputOldPassword,
      error: null,
    });

    const labelNewPassword = new Label({
      forName: "newPassword",
      className: "y-field-profile-text",
      labelName: "Новый пароль",
      input: inputNewPassword,
      error: null,
    });

    const labelRepeatNewPassword = new Label({
      forName: "repeatNewPassword",
      className: "y-field-profile-text",
      labelName: "Повторите новый пароль",
      input: inputRepeatNewPassword,
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

    const avatar = new UserAvatar({
      src: user.avatar,
    });

    return {
      back: linkBack,
      avatar: avatar,
      userName: user.first_name,
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
    <div class='y-profile-password-change'>
      <div class='y-profile-password-change__back'>{{back}}</div>
      <div class='y-profile-password-change__content'>
        <div class='y-profile-password-change__avatar'>{{avatar}}</div>
        <div class='y-profile-password-change__username'>{{userName}}</div>
        <div class='y-profile-password-change__data'>{{content}}</div>
        <div class='y-profile-password-change__action'>{{action}}</div>
      </div>
    </div>
    `;
  }
}

export const ProfilePasswordChange = withProfile(ProfilePasswordChangeBase);
