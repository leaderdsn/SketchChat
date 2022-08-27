import guestLayoutTemplate from "~src/layouts/guestLayout";
import mainLayoutTemplate from "~src/layouts/mainLayout";
import { contextGuestLayout } from "~src/layouts/guestLayout";
import { contextMainLayout } from "~src/layouts/mainLayout";
import login from "~src/pages/login";
import signin from "~src/pages/signin";
import chat from "~src/pages/chat";
import profileUser from "~src/components/profile/profileUser";
import profileChange from "~src/components/profile/profileChange";
import passwordChange from "~src/components/profile/passwordChange";
import { requestError, serverError } from "~src/pages/error";
import constructor from "~src/modules/constructor";
import "~src/styles/main.sass";

const ready = () => {
  const loginPage = document.querySelector("#loginPage");
  const signinPage = document.querySelector("#signinPage");
  const chatPage = document.querySelector("#chatPage");
  const profileUserPage = document.querySelector("#profileUserPage");
  const changeProfilePage = document.querySelector("#changeProfilePage");
  const changePasswordPage = document.querySelector("#changePasswordPage");
  const serverErrorPage = document.querySelector("#serverErrorPage");
  const requestErrorPage = document.querySelector("#requestErrorPage");

  const render = (tmpl: string, context: Object, query: Element):void => {
    query.innerHTML = constructor(context, tmpl);
  };

  render(guestLayoutTemplate, contextGuestLayout(login), loginPage);
  render(guestLayoutTemplate, contextGuestLayout(signin), signinPage);
  render(mainLayoutTemplate, contextMainLayout(chat), chatPage);
  render(mainLayoutTemplate, contextMainLayout(profileUser), profileUserPage);
  render(
    mainLayoutTemplate,
    contextMainLayout(profileChange),
    changeProfilePage
  );
  render(
    mainLayoutTemplate,
    contextMainLayout(passwordChange),
    changePasswordPage
  );
  render(mainLayoutTemplate, contextMainLayout(serverError), serverErrorPage);
  render(mainLayoutTemplate, contextMainLayout(requestError), requestErrorPage);
};

document.addEventListener("DOMContentLoaded", ready);
