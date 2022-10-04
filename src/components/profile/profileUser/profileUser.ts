import Block from "~src/utils/block";
import Piece from "~src/components/base/piece";
import Label from "~src/components/base/label";
import UserAvatar from "~src/components/profile/userAvatar";
import Link from "~src/components/base/link";
import Button from "~src/components/base/button";
import AuthController from "~src/controllers/auth";
import Profile, { withProfile } from "~src/pages/profile/profile";
import { P } from "~src/types";


export class ProfileUserPage extends Profile {
  constructor() {
    super({
      profile: new ProfileUser({}),
    });
  }
}

class ProfileUserBase extends Block {
  protected init() {
    this.children = this.createProfileUser(this.props);
  }

  protected componentDidUpdate(_: P, user: P) {
    this.children = this.createProfileUser(user);
    return true;
  }

  private createProfileUser(user: P) {
    const pieceEmail = new Piece({
      className: "description",
      content: user.email,
    });

    const pieceLogin = new Piece({
      className: "description",
      content: user.login,
    });

    const pieceFirstName = new Piece({
      className: "description",
      content: user.first_name,
    });

    const pieceSecondName = new Piece({
      className: "description",
      content: user.second_name,
    });

    const pieceDisplayName = new Piece({
      className: "description",
      content: user.display_name,
    });

    const piecePhone = new Piece({
      className: "description",
      content: user.phone,
    });

    const labelEmail = new Label({
      forName: "email",
      className: "y-field-profile-text",
      labelName: "Почта",
      input: pieceEmail,
      error: null,
    });

    const labelLogin = new Label({
      forName: "login",
      className: "y-field-profile-text",
      labelName: "Логин",
      input: pieceLogin,
      error: null,
    });

    const labelFirstName = new Label({
      forName: "firstName",
      className: "y-field-profile-text",
      labelName: "Имя",
      input: pieceFirstName,
      error: null,
    });

    const labelLastName = new Label({
      forName: "lastName",
      className: "y-field-profile-text",
      labelName: "Фамилия",
      input: pieceSecondName,
      error: null,
    });

    const labelChatName = new Label({
      forName: "chatName",
      className: "y-field-profile-text",
      labelName: "Имя в чате",
      input: pieceDisplayName,
      error: null,
    });

    const labelPhone = new Label({
      forName: "phone",
      className: "y-field-profile-text",
      labelName: "Телефон",
      input: piecePhone,
      error: null,
    });

    const buttonBack = new Button({
      id: null,
      className: "y-btn-back",
      typeButton: "button",
      text: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>
      <rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>
      <path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>
      </svg>`,
    });

    const buttonChangeData = new Button({
      id: null,
      className: "y-btn-link",
      typeButton: "button",
      text: "Изменить данные",
    });

    const buttonChangePassword = new Button({
      id: null,
      className: "y-btn-link",
      typeButton: "button",
      text: "Изменить пароль",
    });

    const buttonExit = new Button({
      id: null,
      className: "y-btn-link exit",
      typeButton: "button",
      text: "Выйти",
      events: {
        click: () => AuthController.logout(),
      },
    });

    const avatar = new UserAvatar({
      src: user.avatar,
    });

    const linkBack = new Link({
      className: "y-nav-link",
      content: buttonBack,
      to: "/chat",
    });

    const linkPasswordChange = new Link({
      className: "y-nav-link",
      content: buttonChangePassword,
      to: "/profile/password-change",
    });

    const linkProfileChange = new Link({
      className: "y-nav-link",
      content: buttonChangeData,
      to: "/profile/profile-change",
    });

    return {
      back: linkBack,
      avatar: avatar,
      userName: user.first_name,
      content: [
        labelEmail,
        labelLogin,
        labelFirstName,
        labelLastName,
        labelChatName,
        labelPhone,
      ],
      buttonChangeData: linkProfileChange,
      buttonChangePassword: linkPasswordChange,
      buttonExit: buttonExit,
    };
  }

  render() {
    return `
    <div class='y-profile-user'>
      <div class='y-profile-user__back'>{{back}}</div>
      <div class='y-profile-user__content'>
        <div class='y-profile-user__avatar'>{{avatar}}</div>
        <div class='y-profile-user__username'>{{userName}}</div>
        <div class='y-profile-user__data'>{{content}}</div>
        <div class='y-profile-user__action-list'>
          <div class='y-profile-user__action-item'>{{buttonChangeData}}</div>
          <div class='y-profile-user__action-item'>{{buttonChangePassword}}</div>
          <div class='y-profile-user__action-item'>{{buttonExit}}</div>
        </div>
      </div>
    </div>
    `;
  }
}

export const ProfileUser = withProfile(ProfileUserBase);
