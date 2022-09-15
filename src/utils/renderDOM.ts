import { GuestLayout } from "~src/layouts/guestLayout/guestLayout";
import { MainLayout } from "~src/layouts/mainLayout/mainLayout";

export default function render(query: any) {
  let root
  try {
    root = document.querySelector(query);
  } catch (error: any) {
    throw new Error(error)
  }
  
  const guest = new GuestLayout({});
  const main = new MainLayout({});

  const path = document.location.pathname;

  switch (path) {
    case "/":
      document.location.pathname = "/login";
      return;
    case "/login":
      root.append(guest.getContent());
      return guest.dispatchComponentDidMount();
    case "/signin":
      root.append(guest.getContent());
      return guest.dispatchComponentDidMount();
    case "/chat":
      root.append(main.getContent());
      return main.dispatchComponentDidMount();
    case "/profile":
      document.location.pathname = "/profile/profile-user";
      root.append(main.getContent());
      return main.dispatchComponentDidMount();
    case "/profile/profile-user":
      root.append(main.getContent());
      return main.dispatchComponentDidMount();
    case "/profile/profile-change":
      root.append(main.getContent());
      return main.dispatchComponentDidMount();
    case "/profile/password-change":
      root.append(main.getContent());
      return main.dispatchComponentDidMount();
    case "/error-server":
      root.append(main.getContent());
      return main.dispatchComponentDidMount();
    case "/error-request":
      root.append(main.getContent());
      return main.dispatchComponentDidMount();
    default:
      document.location.pathname = "/";
      return root;
  }
}
