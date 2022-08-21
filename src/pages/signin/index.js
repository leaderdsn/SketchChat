import buttonTemplate from "~src/components/base/button";
import inputTemplate from "~src/components/base/input";
import labelTemplate from "~src/components/base/label";
import formTemplate from "~src/components/base/form";
import linkTemplate from "~src/components/base/link";
import signInTemplate from "~src/pages/signin/signin.tmpl";
import constructor from "~src/modules/constructor";

const contextButtonSubmit = {
  id: "buttonSignIn",
  className: "y-btn",
  typeButton: "button",
  click: () => {},
  text: "Зарегистрироваться",
};

const contextInputEmail = {
  id: "email",
  typeInput: "text",
  className: "y-field-control",
  inputName: "email",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextInputLogin = {
  id: "loginReg",
  typeInput: "text",
  className: "y-field-control",
  inputName: "login",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextInputFirstName = {
  id: "firstName",
  typeInput: "text",
  className: "y-field-control",
  inputName: "firstName",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextInputLastName = {
  id: "lastName",
  typeInput: "text",
  className: "y-field-control",
  inputName: "lastName",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextInputPhone = {
  id: "phone",
  typeInput: "text",
  className: "y-field-control",
  inputName: "phone",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextInputPassword = {
  id: "passwordReg",
  typeInput: "password",
  className: "y-field-control",
  inputName: "password",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextInputRepeatPassword = {
  id: "repeatPassword",
  typeInput: "password",
  className: "y-field-control",
  inputName: "repeatPassword",
  placeholder: "",
  handleChange: () => {},
  value: "",
};

const contextLabelEmail = {
  forName: "email",
  labelName: "Почта",
  className: "y-field-text",
  input: constructor(contextInputEmail, inputTemplate),
};

const contextLabelLogin = {
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

const contextLabelLastName = {
  forName: "lastName",
  labelName: "Фамилия",
  className: "y-field-text",
  input: constructor(contextInputLastName, inputTemplate),
};

const contextLabelPhone = {
  forName: "phone",
  labelName: "Телефон",
  className: "y-field-text",
  input: constructor(contextInputPhone, inputTemplate),
};

const contextLabelPassword = {
  forName: "password",
  labelName: "Пароль ",
  className: "y-field-text",
  input: constructor(contextInputPassword, inputTemplate),
};

const contextLabelRepeatPassword = {
  forName: "repeatpassword",
  labelName: "Пароль (ещё раз)",
  className: "y-field-text",
  input: constructor(contextInputRepeatPassword, inputTemplate),
};

const contextLinkToLogin = {
  id: "goLogin",
  className: "text-link",
  src: "#",
  textLink: "Войти",
};

const contextForm = {
  method: "post",
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

const renderForm = constructor(contextForm, formTemplate);

const contextSignIn = {
  className: "y-signin-page",
  headerText: "Регистрация",
  form: renderForm,
};

export default constructor(contextSignIn, signInTemplate);
