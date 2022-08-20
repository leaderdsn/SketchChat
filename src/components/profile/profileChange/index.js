import profileChangeTemplate from "~src/components/profile/profileChange/profileChange.tmpl";
import inputTemplate from "~src/components/base/input";
import setDataToContext from "~src/utils/setDataToContext";
import labelTemplate from "~src/components/base/label/label.tmpl";
import buttonTemplate from "~src/components/base/button";
import userAvatar from "~src/components/profile/userAvatar";
import { svgBack } from "~src/modules/data";
import profilePageTemplate from "~src/pages/profile/profile.tmpl";
import { contextProfile } from "~src/pages/profile";
import constructor from "~src/modules/constructor";

const contextInputs = [
  {
    id: "emailProfile",
    typeInput: "text",
    className: "y-field-profile-control",
    inputName: "email",
    placeholder: "",
    handleChange: () => {},
    value: "pochta@yandex.ru",
    readonly: null,
  },
  {
    id: "loginProfile",
    typeInput: "text",
    className: "y-field-profile-control",
    inputName: "login",
    placeholder: "",
    handleChange: () => {},
    value: "ivanivanov",
  },
  {
    id: "firstNameProfile",
    typeInput: "text",
    className: "y-field-profile-control",
    inputName: "firstName",
    placeholder: "",
    handleChange: () => {},
    value: "Иван",
  },
  {
    id: "lastNameProfile",
    typeInput: "text",
    className: "y-field-profile-control",
    inputName: "lastName",
    placeholder: "",
    handleChange: () => {},
    value: "Иванов",
  },
  {
    id: "chatNameProfile",
    typeInput: "text",
    className: "y-field-profile-control",
    inputName: "chatName",
    placeholder: "",
    handleChange: () => {},
    value: "Иван",
  },
  {
    id: "phoneProfile",
    typeInput: "text",
    className: "y-field-profile-control",
    inputName: "phone",
    placeholder: "",
    handleChange: () => {},
    value: "+7 (909) 967 30 30",
  },
];

const dataLabels = [
  {
    forName: "emailProfile",
    className: "y-field-profile-text",
    labelName: "Почта",
    input: constructor(contextInputs[0], inputTemplate),
  },
  {
    forName: "loginProfile",
    className: "y-field-profile-text",
    labelName: "Логин",
    input: constructor(contextInputs[1], inputTemplate),
  },
  {
    forName: "firstNameProfile",
    className: "y-field-profile-text",
    labelName: "Имя",
    input: constructor(contextInputs[2], inputTemplate),
  },
  {
    forName: "lastNameProfile",
    className: "y-field-profile-text",
    labelName: "Фамилия",
    input: constructor(contextInputs[3], inputTemplate),
  },
  {
    forName: "chatNameProfile",
    className: "y-field-profile-text",
    labelName: "Имя в чате",
    input: constructor(contextInputs[4], inputTemplate),
  },
  {
    forName: "phoneProfile",
    className: "y-field-profile-text",
    labelName: "Телефон",
    input: constructor(contextInputs[5], inputTemplate),
  },
];

const contextButtonSave = {
  id: "saveChangeProfile",
  className: "y-btn",
  typeButton: "button",
  click: () => console.log('Сохранить'),
  text: "Сохранить",
};

const contextButtonBack = {
  id: "backChangeProfile",
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

const contextProfileChange = {
  className: "y-profile change",
  classNameBack: "y-profile__back",
  classNameContent: "y-profile__content",
  back: constructor(contextButtonBack, buttonTemplate),
  classNameAvatar: "y-profile__avatar",
  avatar: userAvatar,
  classNameData: "y-profile__data",
  content: setDataToContext(contextLabel, labelTemplate, dataLabels),
  classNameAction: "y-profile__action",
  action: constructor(contextButtonSave, buttonTemplate),
};

export default constructor(
  contextProfile(
    constructor(contextProfileChange, profileChangeTemplate)
  ),
  profilePageTemplate
);
