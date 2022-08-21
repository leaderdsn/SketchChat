import passwordChangeTemplate from "~src/components/profile/passwordChange/passwordChange.tmpl";
import profilePageTemplate from "~src/pages/profile";
import inputTemplate from "~src/components/base/input";
import setDataToContext from "~src/utils/setDataToContext";
import labelTemplate from "~src/components/base/label/label.tmpl";
import buttonTemplate from "~src/components/base/button";
import userAvatar from "~src/components/profile/userAvatar";
import { svgBack } from "~src/modules/data";
import { contextProfile } from "~src/pages/profile";
import constructor from "~src/modules/constructor";

const contextPasswordInputs = [
  {
    id: "oldPassword",
    typeInput: "password",
    className: "y-field-profile-control",
    inputName: "oldPassword",
    placeholder: "",
    handleChange: () => {},
    value: "",
  },
  {
    id: "newPassword",
    typeInput: "password",
    className: "y-field-profile-control",
    inputName: "newPassword",
    placeholder: "",
    handleChange: () => {},
    value: "",
  },
  {
    id: "repeatNewPassword",
    typeInput: "password",
    className: "y-field-profile-control",
    inputName: "repeatNewPassword",
    placeholder: "",
    handleChange: () => {},
    value: "",
  },
];

const dataPasswordLabels = [
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

const contextButtonSave = {
  id: "savePasswordChange",
  className: "y-btn",
  typeButton: "button",
  click: () => console.log('Сохранить'),
  text: "Сохранить",
};

const contextButtonBack = {
  id: "backPasswordChange",
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

const contextPasswordChange = {
  back: constructor(contextButtonBack, buttonTemplate),
  avatar: userAvatar,
  content: setDataToContext(contextLabel, labelTemplate, dataPasswordLabels),
  action: constructor(contextButtonSave, buttonTemplate),
};

export default constructor(
  contextProfile(
    constructor(contextPasswordChange, passwordChangeTemplate)
  ),
  profilePageTemplate
);
