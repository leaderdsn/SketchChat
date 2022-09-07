import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockProfileUser } from "src/components/profile/profileUser/types";
import Button from "~src/components/base/button";
import Piece from "~src/components/base/piece";
import Label from "~src/components/base/label";
import UserAvatar from "~src/components/profile/userAvatar";

export default class ProfileUser extends Block<BlockProfileUser> {
  constructor(props: BlockProfileUser) {
    super(props as P);
  }

  init() {
    const backHandler = () => {
      document.location.pathname = "/chat";
    };

    const changeProfileHandler = () => {
      document.location.pathname = "/profile/profile-change";
    };

    const changePasswordHandler = () => {
      document.location.pathname = "/profile/password-change";
    };

    const changeExitHandler = () => {
      document.location.pathname = "/login";
    };

    const pieceEmail = new Piece({
      className: "description",
      content: "pochta@yandex.ru",
    });

    const pieceLogin = new Piece({
      className: "description",
      content: "ivanivanov",
    });

    const pieceFirstName = new Piece({
      className: "description",
      content: "Иван",
    });

    const pieceLastName = new Piece({
      className: "description",
      content: "Иванов",
    });

    const pieceChatName = new Piece({
      className: "description",
      content: "Иван",
    });

    const piecePhone = new Piece({
      className: "description",
      content: "+7 (909) 967 30 30",
    });

    const labelEmail = new Label({
      forName: "email",
      className: "y-field-profile-text",
      labelName: "Почта",
      input: pieceEmail,
    });

    const labelLogin = new Label({
      forName: "login",
      className: "y-field-profile-text",
      labelName: "Логин",
      input: pieceLogin,
    });

    const labelFirstName = new Label({
      forName: "firstName",
      className: "y-field-profile-text",
      labelName: "Имя",
      input: pieceFirstName,
    });

    const labelLastName = new Label({
      forName: "lastName",
      className: "y-field-profile-text",
      labelName: "Фамилия",
      input: pieceLastName,
    });

    const labelChatName = new Label({
      forName: "chatName",
      className: "y-field-profile-text",
      labelName: "Имя в чате",
      input: pieceChatName,
    });

    const labelPhone = new Label({
      forName: "phone",
      className: "y-field-profile-text",
      labelName: "Телефон",
      input: piecePhone,
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

    const buttonChangeData = new Button({
      className: "y-btn-link",
      typeButton: "button",
      text: "Изменить данные",
      events: {
        click: changeProfileHandler,
      },
    });

    const buttonChangePassword = new Button({
      className: "y-btn-link",
      typeButton: "button",
      text: "Изменить пароль",
      events: {
        click: changePasswordHandler,
      },
    });

    const buttonExit = new Button({
      className: "y-btn-link",
      typeButton: "button",
      text: "Выйти",
      events: {
        click: changeExitHandler,
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
        labelLogin,
        labelFirstName,
        labelLastName,
        labelChatName,
        labelPhone,
      ],
      buttonChangeData: buttonChangeData,
      buttonChangePassword: buttonChangePassword,
      buttonExit: buttonExit,
    };
  }

  render() {
    return `
    <div class='y-profile'>
      <div class='y-profile__back'>{{back}}</div>
      <div class='y-profile__content'>
        <div class='y-profile__avatar'>{{avatar}}</div>
        <div class='y-profile__data'>{{content}}</div>
        <div class='y-profile__action-list'>
          <div class='y-profile__action-item'>{{buttonChangeData}}</div>
          <div class='y-profile__action-item'>{{buttonChangePassword}}</div>
          <div class='y-profile__action-item'>{{buttonExit}}</div>
        </div>
      </div>
    </div>
    `;
  }
}
