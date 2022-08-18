import constructor from "../../modules/constructor";
import buttonTemplate from "../../components/base/button";
import inputTemplate from "../../components/base/input";
import labelTemplate from "../../components/base/label";
import formTemplate from "../../components/base/form";
import loginTemplate from "./login.tmpl";
import linkTemplate from "../../components/base/link";

const contextButtonSubmit = {
  id: 'goChat',
  className: 'y-btn',
  typeButton: 'button',
  handleClick: () => {},
  text: 'Вход',
}
const contextInputLogin = {
  id: 'login',
  typeInput: 'text', 
  className: 'y-field-control',
  inputName: 'login',
  placeholder: '',
  handleChange: () => {},
  value: '',
}
const contextInputPassword = {
  id: 'password',
  typeInput: 'password', 
  className: 'y-field-control',
  inputName: 'password',
  placeholder: '',
  handleChange: () => {},
  value: '',
}

const contextLabelLogin = {
  forName: 'login',
  labelName: 'Логин', 
  className: 'y-field-text',
  input: constructor(contextInputLogin, inputTemplate),
}

const contextLabelPassword = {
  forName: 'password',
  labelName: 'Пароль', 
  className: 'y-field-text',
  input: constructor(contextInputPassword, inputTemplate),
}
const contextLinkToSignIn = {
  id: 'goSignIn',
  src: '#',
  textLink: 'Нет аккаунта?',
}

const contextForm = {
  method: 'post',
  content: [
    constructor(contextLabelLogin, labelTemplate),
    constructor(contextLabelPassword, labelTemplate),
    constructor(contextButtonSubmit, buttonTemplate),
    constructor(contextLinkToSignIn, linkTemplate),
  ].join('')
}

const renderForm = constructor(contextForm, formTemplate)

const contextLogin = {
  text: 'Вход', 
  className: 'y-login-page',
  headerText: 'Вход', 
  form: renderForm,
}

export default constructor(contextLogin, loginTemplate);