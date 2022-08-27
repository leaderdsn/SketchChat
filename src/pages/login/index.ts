import loginTemplate from "~src/pages/login/login.tmpl";
import buttonTemplate from "~src/components/base/button";
import { TButton } from "~src/components/base/button/types";
import { TInput } from "~src/components/base/input/types";
import { TLabel } from "~src/components/base/label/types";
import { TLink } from "~src/components/base/link/types";
import inputTemplate from "~src/components/base/input";
import labelTemplate from "~src/components/base/label";
import linkTemplate from "~src/components/base/link";
import formTemplate from "~src/components/base/form";
import constructor from "~src/modules/constructor";
import { TForm } from "~src/components/base/form/types";
import { TContextLoginAndSignIn } from "~src/pages/login/types";

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
