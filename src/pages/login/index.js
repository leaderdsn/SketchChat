import constructor from "../../modules/constructor";
import buttonTemplate from "../../components/base/button";
import inputTemplate from "../../components/base/input";
import labelTemplate from "../../components/base/label";
import formTemplate from "../../components/base/form";
import loginTemplate from "./login.tmpl";
import linkTemplate from "../../components/base/link";

const contextButtonSubmit = {
  className: 'btn',
  text: 'Вход',
  typeButton: 'submit',
  handleClick: () => {},
}
const contextInputLogin = {
  handleChange: (e) => handleChange(e), 
  id: 'login',
  inputType: 'text', 
  className: 'field-control',
  inputName: 'login',
  value: '',
}
const contextInputPassword = {
  handleChange: (e) => handleChange(e), 
  id: 'password',
  inputType: 'password', 
  className: 'field-control',
  inputName: 'password',
  value: '',
}

const contextLabelLogin = {
  forName: 'login',
  labelName: 'Логин', 
  className: 'field-text',
  input: constructor(contextInputLogin, inputTemplate),
}

const contextLabelPassword = {
  forName: 'password',
  labelName: 'Пароль', 
  className: 'field-text',
  input: constructor(contextInputPassword, inputTemplate),
}
const contextLinkToSignIn = {
  src: '#',
  textLink: 'Нет аккаунта?',
}

const contextForm = {
  method: 'post',
  content: renderContent(//поправить
    [
      constructor(contextLabelLogin, labelTemplate),
      constructor(contextLabelPassword, labelTemplate),
      constructor(contextButtonSubmit, buttonTemplate),
      constructor(contextLinkToSignIn, linkTemplate),
    ]
  ), 
}

const renderForm = constructor(contextForm, formTemplate)

function handleChange(value) {
  console.log(value);
}


//переделать renderContent
function renderContent(content) {
  let res = '';
  for(let i = 0; i < content.length; i++) {
    res += content[i]
  }
  return res;
}

const contextLogin = {
  text: 'Вход', 
  className: 'login-page',
  headerText: 'Вход', 
  form: renderForm,
}

export default constructor(contextLogin, loginTemplate);