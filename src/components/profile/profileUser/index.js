import profileUserTemplate from "~src/components/profile/profileUser/profileUser.tmpl";
import userAvatar from "~src/components/profile/userAvatar";
import buttonTemplate from "~src/components/base/button";
import { svgBack } from "~src/modules/data";
import labelTemplate from "~src/components/base/label";
import setDataToContext from "~src/utils/setDataToContext";
import profilePageTemplate from "~src/pages/profile/profile.tmpl";
import { contextProfile } from "~src/pages/profile";
import constructor from "~src/modules/constructor";

const dataLabels = [
  {
    forName: "email",
    className: "y-field-profile-text",
    labelName: "Почта",
    input: `<span class='description'>pochta@yandex.ru</span>`,
  },
  {
    forName: "login",
    className: "y-field-profile-text",
    labelName: "Логин",
    input: `<span class='description'>ivanivanov</span>`,
  },
  {
    forName: "firstName",
    className: "y-field-profile-text",
    labelName: "Имя",
    input: `<span class='description'>Иван</span>`,
  },
  {
    forName: "lastName",
    className: "y-field-profile-text",
    labelName: "Фамилия",
    input: `<span class='description'>Иванов</span>`,
  },
  {
    forName: "chatName",
    className: "y-field-profile-text",
    labelName: "Имя в чате",
    input: `<span class='description'>Иван</span>`,
  },
  {
    forName: "phone",
    className: "y-field-profile-text",
    labelName: "Телефон",
    input: `<span class='description'>+7 (909) 967 30 30</span>`,
  },
];

const contextButton = [
  {
    id: "changeData",
    className: "y-btn-link",
    typeButton: "button",
    click: () => {},
    text: "Изменить данные",
  },
  {
    id: "changePassword",
    className: "y-btn-link",
    typeButton: "button",
    click: () => {},
    text: "Изменить пароль",
  },
  {
    id: "exit",
    className: "y-btn-link",
    typeButton: "button",
    click: () => {},
    text: "Выйти",
  },
];

const contextButtonBack = {
  id: "backProfileUser",
  className: "y-btn-back",
  typeButton: "button",
  click: () => {},
  text: svgBack,
};

const contextLabel = {
  forName: null,
  labelName: null,
  className: null,
  input: null,
};

const contextUserInfo = {
  className: "y-profile",
  classNameBack: "y-profile__back",
  classNameContent: "y-profile__content",
  back: constructor(contextButtonBack, buttonTemplate),
  classNameAvatar: "y-profile__avatar",
  avatar: userAvatar,
  classNameData: "y-profile__data",
  content: setDataToContext(contextLabel, labelTemplate, dataLabels),
  classNameActionList: "y-profile__action-list",
  classNameAction: "y-profile__action-item",
  action1: constructor(contextButton[0], buttonTemplate),
  action2: constructor(contextButton[1], buttonTemplate),
  action3: constructor(contextButton[2], buttonTemplate),
};

export default constructor(
  contextProfile(constructor(contextUserInfo, profileUserTemplate)),
  profilePageTemplate
);
