// import guestLayoutTemplate from "~src/layouts/guestLayout";
// import mainLayoutTemplate from "~src/layouts/mainLayout";
// import { contextGuestLayout } from "~src/layouts/guestLayout";
// import { contextMainLayout } from "~src/layouts/mainLayout";
// import login from "~src/pages/login";
// import signin from "~src/pages/signin";
// import chat from "~src/pages/chat";
// import profileUser from "~src/components/profile/profileUser";
// import profileChange from "~src/components/profile/profileChange";
// import passwordChange from "~src/components/profile/passwordChange";
// import { requestError, serverError } from "~src/pages/error";
// import constructor from "~src/modules/constructor";
import "~src/styles/main.sass";

// const components = require('./components/**/index.ts') as {[key: string]: { default: typeof Block }};

// Object.values(components).forEach((component) => {
//   registerComponent(component.default);
// })

// const ready = () => {
//   const root = document.querySelector('#root')

//   const guestLayout = new GuestLayout('props')
//   root.append(guestLayout.getContent())
//   const loginPage = document.querySelector("#loginPage");
//   const signinPage = document.querySelector("#signinPage");
//   const chatPage = document.querySelector("#chatPage");
//   const profileUserPage = document.querySelector("#profileUserPage");
//   const changeProfilePage = document.querySelector("#changeProfilePage");
//   const changePasswordPage = document.querySelector("#changePasswordPage");
//   const serverErrorPage = document.querySelector("#serverErrorPage");
//   const requestErrorPage = document.querySelector("#requestErrorPage");

  // const render = (tmpl: string, context: Object, query: Element):void => {
  //   query.innerHTML = constructor(context, tmpl);
  // };

//   render(guestLayoutTemplate, contextGuestLayout(login), loginPage);
//   render(guestLayoutTemplate, contextGuestLayout(signin), signinPage);
//   render(mainLayoutTemplate, contextMainLayout(chat), chatPage);
//   render(mainLayoutTemplate, contextMainLayout(profileUser), profileUserPage);
//   render(
//     mainLayoutTemplate,
//     contextMainLayout(profileChange),
//     changeProfilePage
//   );
//   render(
//     mainLayoutTemplate,
//     contextMainLayout(passwordChange),
//     changePasswordPage
//   );
//   render(mainLayoutTemplate, contextMainLayout(serverError), serverErrorPage);
//   render(mainLayoutTemplate, contextMainLayout(requestError), requestErrorPage);
// };

// document.addEventListener("DOMContentLoaded", ready);


import { GuestLayout } from "~src/layouts/guestLayout/guestLayout";
import render from "~src/utils/renderDOM";
// import Button from "./components/base/button";

// const button = new Button({
//   text: 'button',
//   click: () => console.log('good!!!')
// })

// const guestLayout = new GuestLayout({
//   content: button
// })
// const button = new Button({
//   text: 'Click me',
//   events: {
//     click: () => console.log('clicked!')
//   }
// });

// const guestLayout = new GuestLayout({
//   content: button as unknown as string
// })
const guestLayout = new GuestLayout({})

render("#root", guestLayout);

guestLayout.setProps({header: `MainLayout`})
