import profileChangeTemplate from "~src/components/profile/profileChange/profileChange.tmpl";
import inputTemplate, { TInput } from "~src/components/base/input";
import setDataToContext from "~src/utils/setDataToContext";
import labelTemplate from "~src/components/base/label/label.tmpl";
import buttonTemplate, { TButton } from "~src/components/base/button";
import userAvatar from "~src/components/profile/userAvatar";
import profilePageTemplate from "~src/pages/profile/profile.tmpl";
import { contextProfile } from "~src/pages/profile";
import constructor from "~src/modules/constructor";
import { TLabel } from "~src/components/base/label";
import { TContextProfile } from "~src/components/profile/profileUser";

const contextInputs: TInput[] = [
  {
    id: "emailProfile",
    typeInput: "text",
    className: "y-field-profile-control",
    inputName: "email",
    placeholder: "",
    handleChange: () => {},
    value: "pochta@yandex.ru",
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

const dataLabels: TLabel[] = [
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

const contextButtonSave: TButton = {
  id: "saveChangeProfile",
  className: "y-btn",
  typeButton: "button",
  click: () => console.log("Сохранить"),
  text: "Сохранить",
};

const contextButtonBack: TButton = {
  id: "backChangeProfile",
  className: "y-btn-back",
  typeButton: "button",
  click: () => {},
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

const contextProfileChange: TContextProfile = {
  back: constructor(contextButtonBack, buttonTemplate),
  avatar: userAvatar,
  content: setDataToContext(contextLabel, labelTemplate, dataLabels),
  action: constructor(contextButtonSave, buttonTemplate),
};

export default constructor(
  contextProfile(constructor(contextProfileChange, profileChangeTemplate)),
  profilePageTemplate
);
