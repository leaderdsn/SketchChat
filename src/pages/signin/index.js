import constructor from "../../modules/constructor";
import buttonTemplate from "../../components/base/button";
import inputTemplate from "../../components/base/input";
import labelTemplate from "../../components/base/label";
import formTemplate from "../../components/base/form";
import linkTemplate from "../../components/base/link";
import signInTemplate from "./signin.tmpl";

const contextButtonSubmit = {
  className: 'y-btn',
  text: 'Зарегистрироваться',
  handleClick: (e) => handleClick(e),
}
const contextInputEmail = {
  handleChange: (e) => handleChange(e), 
  id: 'email',
  inputType: 'text', 
  className: 'y-field-control',
  inputName: 'email',
  value: '',
}
const contextInputLogin = {
  handleChange: (e) => handleChange(e), 
  id: 'login',
  inputType: 'text', 
  className: 'y-field-control',
  inputName: 'login',
  value: '',
}
const contextInputFirstName = {
  handleChange: (e) => handleChange(e), 
  id: 'firstName',
  inputType: 'text', 
  className: 'y-field-control',
  inputName: 'firstName',
  value: '',
}
const contextInputLastName = {
  handleChange: (e) => handleChange(e), 
  id: 'lastName',
  inputType: 'text', 
  className: 'y-field-control',
  inputName: 'lastName',
  value: '',
}
const contextInputPhone = {
  handleChange: (e) => handleChange(e), 
  id: 'phone',
  inputType: 'text', 
  className: 'y-field-control',
  inputName: 'phone',
  value: '',
}
const contextInputPassword = {
  handleChange: (e) => handleChange(e), 
  id: 'password',
  inputType: 'password', 
  className: 'y-field-control',
  inputName: 'password',
  value: '',
}
const contextInputRepeatPassword = {
  handleChange: (e) => handleChange(e), 
  id: 'repeatPassword',
  inputType: 'password', 
  className: 'y-field-control',
  inputName: 'repeatPassword',
  value: '',
}

const contextLabelEmail = {
  forName: 'email',
  labelName: 'Почта', 
  className: 'y-field-text',
  input: constructor(contextInputEmail, inputTemplate),
}

const contextLabelLogin = {
  forName: 'login',
  labelName: 'Логин', 
  className: 'y-field-text',
  input: constructor(contextInputLogin, inputTemplate),
}

const contextLabelFirstName = {
  forName: 'firstName',
  labelName: 'Имя', 
  className: 'y-field-text',
  input: constructor(contextInputFirstName, inputTemplate),
}

const contextLabelLastName = {
  forName: 'lastName',
  labelName: 'Фамилия', 
  className: 'y-field-text',
  input: constructor(contextInputLastName, inputTemplate),
}

const contextLabelPhone = {
  forName: 'phone',
  labelName: 'Телефон', 
  className: 'y-field-text',
  input: constructor(contextInputPhone, inputTemplate),
}

const contextLabelPassword = {
  forName: 'password',
  labelName: 'Пароль (ещё раз)', 
  className: 'y-field-text',
  input: constructor(contextInputPassword, inputTemplate),
}

const contextLabelRepeatPassword = {
  forName: 'repeatpassword',
  labelName: 'Пароль', 
  className: 'y-field-text',
  input: constructor(contextInputRepeatPassword, inputTemplate),
}
const contextLinkToLogin = {
  src: '#',
  textLink: 'Войти',
}

const contextForm = {
  method: 'post',
  content: renderContent(
    [
      constructor(contextLabelEmail, labelTemplate),
      constructor(contextLabelLogin, labelTemplate),
      constructor(contextLabelFirstName, labelTemplate),
      constructor(contextLabelLastName, labelTemplate),
      constructor(contextLabelPhone, labelTemplate),
      constructor(contextLabelPassword, labelTemplate),
      constructor(contextLabelRepeatPassword, labelTemplate),
      constructor(contextButtonSubmit, buttonTemplate),
      constructor(contextLinkToLogin, linkTemplate),
    ]
  ), 
}

const renderForm = constructor(contextForm, formTemplate)

function handleChange(value) {
  console.log(value);
}

function renderContent(content) {
  let res = '';
  for(let i = 0; i < content.length; i++) {
    res += content[i]
  }
  return res;
}

const contextSignIn = { 
  className: 'y-signin-page',
  headerText: 'Регистрация', 
  form: renderForm,
}

export default constructor(contextSignIn, signInTemplate);