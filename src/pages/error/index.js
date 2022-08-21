import errorTemplate from "~src/pages/error/error.tmpl";
import linkTemplate from "~src/components/base/link";
import constructor from "~src/modules/constructor";

const contextLinkToChats = {
  id: "linkGoChat",
  src: "#chatPage",
  textLink: "Назад к чатам",
};
const contextLinkToSignIn = {
  id: "linkGoSignIn",
  src: "#signinPage",
  textLink: "Назад к регистрации",
};
const contextRequestError = {
  className: "y-error-page-404",
  numberError: "404",
  textMessage: "Не туда попали",
  content: constructor(contextLinkToChats, linkTemplate),
};

export const requestError = constructor(
  contextRequestError,
  errorTemplate
);

const contextServerError = {
  numberError: "500",
  textMessage: "Мы уже фиксим",
  content: constructor(contextLinkToSignIn, linkTemplate),
};

export const serverError = constructor(
  contextServerError,
  errorTemplate
);
