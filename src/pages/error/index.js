import constructor from "../../modules/constructor";
import errorTemplate from "./error.tmpl";
import linkTemplate from "../../components/base/link";

const contextLinkToChats = {
  id: 'linkGoChat',
  src: '#',
  textLink: 'Назад к чатам',
}
const contextLinkToSignIn = {
  id: 'linkGoSignIn',
  src: '#',
  textLink: 'Назад к регистрации',
}
const contextRequestError = {
  className: 'y-error-page-404',
  numberError: '404', 
  textMessage: 'Не туда попали', 
  content: constructor(contextLinkToChats, linkTemplate)
}

export const requestError = constructor(contextRequestError, errorTemplate)

const contextServerError = {
  className: 'y-error-page-500',
  numberError: '500', 
  textMessage: 'Мы уже фиксим', 
  content: constructor(contextLinkToSignIn, linkTemplate)
}

export const serverError = constructor(contextServerError, errorTemplate)
