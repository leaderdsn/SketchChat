import loginTemplate from "~src/pages/login/login.tmpl";
import buttonTemplate, { TButton } from "~src/components/base/button";
import inputTemplate, { TInput } from "~src/components/base/input";
import labelTemplate, { TLabel } from "~src/components/base/label";
import formTemplate from "~src/components/base/form";
import linkTemplate, { TLink } from "~src/components/base/link";
import constructor from "~src/modules/constructor";

export type TForm = {
  method: string,
  className: string,
  content: string,
};

export type TContextLoginAndSignIn = {
  headerText: string,
  form: string,
};

const contextButtonSubmit: TButton = {
  id: "goChat",
  className: "y-btn",
  typeButton: "button",
  click: () => null,
  text: "Вход",
};

const contextInputLogin: TInput = {
  id: "login",
  typeInput: "text",
  className: "y-field-control",
  inputName: "login",
  placeholder: "",
  handleChange: () => null,
  value: "",
};

const contextInputPassword: TInput = {
  id: "password",
  typeInput: "password",
  className: "y-field-control",
  inputName: "password",
  placeholder: "",
  handleChange: () => null,
  value: "",
};

const contextLabelLogin: TLabel = {
  forName: "login",
  labelName: "Логин",
  className: "y-field-text",
  input: constructor(contextInputLogin, inputTemplate),
};

const contextLabelPassword: TLabel = {
  forName: "password",
  labelName: "Пароль",
  className: "y-field-text",
  input: constructor(contextInputPassword, inputTemplate),
};

const contextLinkToSignIn: TLink = {
  id: "goSignIn",
  className: "text-link",
  src: "#signinPage",
  textLink: "Нет аккаунта?",
};

const contextForm: TForm = {
  method: "post",
  className: "y-login-page__form",
  content: [
    constructor(contextLabelLogin, labelTemplate),
    constructor(contextLabelPassword, labelTemplate),
    constructor(contextButtonSubmit, buttonTemplate),
    constructor(contextLinkToSignIn, linkTemplate),
  ].join(""),
};

const contextLogin: TContextLoginAndSignIn = {
  headerText: "Вход",
  form: constructor(contextForm, formTemplate),
};

export default constructor(contextLogin, loginTemplate);
