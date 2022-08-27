import passwordChangeTemplate from "~src/components/profile/passwordChange/passwordChange.tmpl";
import profilePageTemplate from "~src/pages/profile";
import inputTemplate, { TInput } from "~src/components/base/input";
import setDataToContext from "~src/utils/setDataToContext";
import labelTemplate from "~src/components/base/label/label.tmpl";
import buttonTemplate, { TButton } from "~src/components/base/button";
import userAvatar from "~src/components/profile/userAvatar";
import { contextProfile } from "~src/pages/profile";
import constructor from "~src/modules/constructor";
import { TLabel } from "~src/components/base/label";
import { TContextProfile } from "~src/components/profile/profileUser";

const contextPasswordInputs: TInput[] = [
  {
    id: "oldPassword",
    typeInput: "password",
    className: "y-field-profile-control",
    inputName: "oldPassword",
    placeholder: "",
    handleChange: () => null,
    value: "",
  },
  {
    id: "newPassword",
    typeInput: "password",
    className: "y-field-profile-control",
    inputName: "newPassword",
    placeholder: "",
    handleChange: () => null,
    value: "",
  },
  {
    id: "repeatNewPassword",
    typeInput: "password",
    className: "y-field-profile-control",
    inputName: "repeatNewPassword",
    placeholder: "",
    handleChange: () => null,
    value: "",
  },
];

const dataPasswordLabels: TLabel[] = [
  {
    forName: "oldPassword",
    className: "y-field-profile-text",
    labelName: "Старый пароль",
    input: constructor(contextPasswordInputs[0], inputTemplate),
  },
  {
    forName: "newPassword",
    className: "y-field-profile-text",
    labelName: "Новый пароль",
    input: constructor(contextPasswordInputs[1], inputTemplate),
  },
  {
    forName: "repeatNewPassword",
    className: "y-field-profile-text",
    labelName: "Повторите новый пароль",
    input: constructor(contextPasswordInputs[2], inputTemplate),
  },
];

const contextButtonSave: TButton = {
  id: "savePasswordChange",
  className: "y-btn",
  typeButton: "button",
  click: () => console.log("Сохранить"),
  text: "Сохранить",
};

const contextButtonBack: TButton = {
  id: "backPasswordChange",
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

const contextPasswordChange: TContextProfile = {
  back: constructor(contextButtonBack, buttonTemplate),
  avatar: userAvatar,
  content: setDataToContext(contextLabel, labelTemplate, dataPasswordLabels),
  action: constructor(contextButtonSave, buttonTemplate),
};

export default constructor(
  contextProfile(constructor(contextPasswordChange, passwordChangeTemplate)),
  profilePageTemplate
);
