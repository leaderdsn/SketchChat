import errorTemplate from "~src/pages/error/error.tmpl";
import linkTemplate, { TLink } from "~src/components/base/link";
import constructor from "~src/modules/constructor";

type TContextError  = {
  numberError: string,
  textMessage: string,
  content: string,
};

const contextLinkToChats: TLink = {
  id: "linkGoChat",
  className: "text-link",
  src: "#chatPage",
  textLink: "Назад к чатам",
};

const contextLinkToSignIn: TLink = {
  id: "linkGoSignIn",
  className: "text-link",
  src: "#signinPage",
  textLink: "Назад к регистрации",
};

const contextRequestError: TContextError = {
  numberError: "404",
  textMessage: "Не туда попали",
  content: constructor(contextLinkToChats, linkTemplate),
};

export const requestError: string = constructor(
  contextRequestError,
  errorTemplate
);

const contextServerError: TContextError = {
  numberError: "500",
  textMessage: "Мы уже фиксим",
  content: constructor(contextLinkToSignIn, linkTemplate),
};

export const serverError: string = constructor(
  contextServerError,
  errorTemplate
);
