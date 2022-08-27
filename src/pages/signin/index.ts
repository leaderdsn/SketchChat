import buttonTemplate, { TButton } from "~src/components/base/button";
import inputTemplate, { TInput } from "~src/components/base/input";
import labelTemplate, { TLabel } from "~src/components/base/label";
import formTemplate from "~src/components/base/form";
import linkTemplate, { TLink } from "~src/components/base/link";
import signInTemplate from "~src/pages/signin/signin.tmpl";
import constructor from "~src/modules/constructor";
import { TContextLoginAndSignIn, TForm } from "../login";

const contextButtonSubmit: TButton = {
  id: "buttonSignIn",
  className: "y-btn",
  typeButton: "button",
  click: () => {},
  text: "Зарегистрироваться",
};

const contextInputEmail: TInput = {
  id: "email",
  typeInput: "text",
  className: "y-field-control",
  inputName: "email",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextInputLogin: TInput = {
  id: "loginReg",
  typeInput: "text",
  className: "y-field-control",
  inputName: "login",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextInputFirstName: TInput = {
  id: "firstName",
  typeInput: "text",
  className: "y-field-control",
  inputName: "firstName",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextInputLastName: TInput = {
  id: "lastName",
  typeInput: "text",
  className: "y-field-control",
  inputName: "lastName",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextInputPhone: TInput = {
  id: "phone",
  typeInput: "text",
  className: "y-field-control",
  inputName: "phone",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextInputPassword: TInput = {
  id: "passwordReg",
  typeInput: "password",
  className: "y-field-control",
  inputName: "password",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextInputRepeatPassword: TInput = {
  id: "repeatPassword",
  typeInput: "password",
  className: "y-field-control",
  inputName: "repeatPassword",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextLabelEmail: TLabel = {
  forName: "email",
  labelName: "Почта",
  className: "y-field-text",
  input: constructor(contextInputEmail, inputTemplate),
};

const contextLabelLogin: TLabel = {
  forName: "login",
  labelName: "Логин",
  className: "y-field-text",
  input: constructor(contextInputLogin, inputTemplate),
};

const contextLabelFirstName = {
  forName: "firstName",
  labelName: "Имя",
  className: "y-field-text",
  input: constructor(contextInputFirstName, inputTemplate),
};

const contextLabelLastName: TLabel = {
  forName: "lastName",
  labelName: "Фамилия",
  className: "y-field-text",
  input: constructor(contextInputLastName, inputTemplate),
};

const contextLabelPhone: TLabel = {
  forName: "phone",
  labelName: "Телефон",
  className: "y-field-text",
  input: constructor(contextInputPhone, inputTemplate),
};

const contextLabelPassword: TLabel = {
  forName: "password",
  labelName: "Пароль ",
  className: "y-field-text",
  input: constructor(contextInputPassword, inputTemplate),
};

const contextLabelRepeatPassword: TLabel = {
  forName: "repeatpassword",
  labelName: "Пароль (ещё раз)",
  className: "y-field-text",
  input: constructor(contextInputRepeatPassword, inputTemplate),
};

const contextLinkToLogin: TLink = {
  id: "goLogin",
  className: "text-link",
  src: "#",
  textLink: "Войти",
};

const contextForm: TForm = {
  method: "post",
  className: "y-signin-page__form",
  content: [
    constructor(contextLabelEmail, labelTemplate),
    constructor(contextLabelLogin, labelTemplate),
    constructor(contextLabelFirstName, labelTemplate),
    constructor(contextLabelLastName, labelTemplate),
    constructor(contextLabelPhone, labelTemplate),
    constructor(contextLabelPassword, labelTemplate),
    constructor(contextLabelRepeatPassword, labelTemplate),
    constructor(contextButtonSubmit, buttonTemplate),
    constructor(contextLinkToLogin, linkTemplate),
  ].join(""),
};

const contextSignIn: TContextLoginAndSignIn = {
  headerText: "Регистрация",
  form: constructor(contextForm, formTemplate),
};

export default constructor(contextSignIn, signInTemplate);
