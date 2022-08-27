import buttonTemplate from "~src/components/base/button";
import { TButton } from "~src/components/base/button/types";
import inputTemplate from "~src/components/base/input";
import { TInput } from "~src/components/base/input/types";
import labelTemplate from "~src/components/base/label";
import { TLabel } from "~src/components/base/label/types";
import formTemplate from "~src/components/base/form";
import linkTemplate from "~src/components/base/link";
import { TLink } from "~src/components/base/link/types";
import signInTemplate from "~src/pages/signin/signin.tmpl";
import constructor from "~src/modules/constructor";
import { TForm } from "~src/components/base/form/types";
import { TContextLoginAndSignIn } from "~src/pages/login/types";

const contextButtonSubmit: TButton = {
  id: "buttonSignIn",
  className: "y-btn",
  typeButton: "button",
  click: () => null,
  text: "Зарегистрироваться",
};

const contextInputEmail: TInput = {
  id: "email",
  typeInput: "text",
  className: "y-field-control",
  inputName: "email",
  placeholder: "",
  handleChange: () => null,
  value: "",
};

const contextInputLogin: TInput = {
  id: "loginReg",
  typeInput: "text",
  className: "y-field-control",
  inputName: "login",
  placeholder: "",
  handleChange: () => null,
  value: "",
};

const contextInputFirstName: TInput = {
  id: "firstName",
  typeInput: "text",
  className: "y-field-control",
  inputName: "firstName",
  placeholder: "",
  handleChange: () => null,
  value: "",
};

const contextInputLastName: TInput = {
  id: "lastName",
  typeInput: "text",
  className: "y-field-control",
  inputName: "lastName",
  placeholder: "",
  handleChange: () => null,
  value: "",
};

const contextInputPhone: TInput = {
  id: "phone",
  typeInput: "text",
  className: "y-field-control",
  inputName: "phone",
  placeholder: "",
  handleChange: () => null,
  value: "",
};

const contextInputPassword: TInput = {
  id: "passwordReg",
  typeInput: "password",
  className: "y-field-control",
  inputName: "password",
  placeholder: "",
  handleChange: () => null,
  value: "",
};

const contextInputRepeatPassword: TInput = {
  id: "repeatPassword",
  typeInput: "password",
  className: "y-field-control",
  inputName: "repeatPassword",
  placeholder: "",
  handleChange: () => null,
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
