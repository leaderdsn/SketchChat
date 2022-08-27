import profileUserTemplate from "~src/components/profile/profileUser/profileUser.tmpl";
import userAvatar from "~src/components/profile/userAvatar";
import buttonTemplate from "~src/components/base/button";
import { TButton } from "~src/components/base/button/types";
import labelTemplate from "~src/components/base/label";
import { TLabel } from "~src/components/base/label/types";
import setDataToContext from "~src/utils/setDataToContext";
import profilePageTemplate from "~src/pages/profile/profile.tmpl";
import { contextProfile } from "~src/pages/profile";
import constructor from "~src/modules/constructor";
import { TRecordType } from "~src/modules/types";
import blockTemplate from "~src/components/base/block";
import { TBlock } from "~src/components/base/block/types";

const contextBlocks: TBlock[] = [
  {
    className: "description",
    content: "pochta@yandex.ru",
  },
  {
    className: "description",
    content: "ivanivanov",
  },
  {
    className: "description",
    content: "Иван",
  },
  {
    className: "description",
    content: "Иванов",
  },
  {
    className: "description",
    content: "Иван",
  },
  {
    className: "description",
    content: "+7 (909) 967 30 30",
  },
];

const dataLabels: TLabel[] = [
  {
    forName: "email",
    className: "y-field-profile-text",
    labelName: "Почта",
    input: constructor(contextBlocks[0], blockTemplate),
  },
  {
    forName: "login",
    className: "y-field-profile-text",
    labelName: "Логин",
    input: constructor(contextBlocks[1], blockTemplate),
  },
  {
    forName: "firstName",
    className: "y-field-profile-text",
    labelName: "Имя",
    input: constructor(contextBlocks[2], blockTemplate),
  },
  {
    forName: "lastName",
    className: "y-field-profile-text",
    labelName: "Фамилия",
    input: constructor(contextBlocks[3], blockTemplate),
  },
  {
    forName: "chatName",
    className: "y-field-profile-text",
    labelName: "Имя в чате",
    input: constructor(contextBlocks[4], blockTemplate),
  },
  {
    forName: "phone",
    className: "y-field-profile-text",
    labelName: "Телефон",
    input: constructor(contextBlocks[5], blockTemplate),
  },
];

const contextButton: TButton[] = [
  {
    id: "changeData",
    className: "y-btn-link",
    typeButton: "button",
    click: () => null,
    text: "Изменить данные",
  },
  {
    id: "changePassword",
    className: "y-btn-link",
    typeButton: "button",
    click: () => null,
    text: "Изменить пароль",
  },
  {
    id: "exit",
    className: "y-btn-link",
    typeButton: "button",
    click: () => null,
    text: "Выйти",
  },
];

const contextButtonBack: Record<string, TRecordType> = {
  id: "backProfileUser",
  className: "y-btn-back",
  typeButton: "button",
  click: () => null,
  text: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>
    <rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>
    <path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>
  </svg>`,
};

const contextLabel: TLabel = {
  forName: null,
  labelName: null,
  className: null,
  input: null,
};

const contextUserInfo: Record<string, TRecordType> = {
  back: constructor(contextButtonBack, buttonTemplate),
  avatar: userAvatar,
  content: setDataToContext(contextLabel, labelTemplate, dataLabels),
  buttonChangeData: constructor(contextButton[0], buttonTemplate),
  buttonChangePassword: constructor(contextButton[1], buttonTemplate),
  buttonExit: constructor(contextButton[2], buttonTemplate),
};

export default constructor(
  contextProfile(constructor(contextUserInfo, profileUserTemplate)),
  profilePageTemplate
);
