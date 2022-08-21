import loginTemplate from "./login.tmpl";
import buttonTemplate from "~src/components/base/button";
import inputTemplate from "~src/components/base/input";
import labelTemplate from "~src/components/base/label";
import formTemplate from "~src/components/base/form";
import linkTemplate from "~src/components/base/link";
import constructor from "~src/modules/constructor";

const contextButtonSubmit = {
  id: "goChat",
  className: "y-btn",
  typeButton: "button",
  click: () => {},
  text: "Вход",
};

const contextInputLogin = {
  id: "login",
  typeInput: "text",
  className: "y-field-control",
  inputName: "login",
  placeholder: "",
  click: () => {},
  value: "",
};

const contextInputPassword = {
  id: "password",
  typeInput: "password",
  className: "y-field-control",
  inputName: "password",
  placeholder: "",
  click: () => {},
  value: "",
};

const contextLabelLogin = {
  forName: "login",
  labelName: "Логин",
  className: "y-field-text",
  input: constructor(contextInputLogin, inputTemplate),
};

const contextLabelPassword = {
  forName: "password",
  labelName: "Пароль",
  className: "y-field-text",
  input: constructor(contextInputPassword, inputTemplate),
};

const contextLinkToSignIn = {
  id: "goSignIn",
  className: "text-link",
  src: "#signinPage",
  textLink: "Нет аккаунта?",
};

const contextForm = {
  method: "post",
  content: [
    constructor(contextLabelLogin, labelTemplate),
    constructor(contextLabelPassword, labelTemplate),
    constructor(contextButtonSubmit, buttonTemplate),
    constructor(contextLinkToSignIn, linkTemplate),
  ].join(""),
};

const renderForm = constructor(contextForm, formTemplate);

const contextLogin = {
  text: "Вход",
  headerText: "Вход",
  form: renderForm,
};

export default constructor(contextLogin, loginTemplate);
