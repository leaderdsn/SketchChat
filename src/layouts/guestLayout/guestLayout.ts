import Login from "~src/pages/login";
import Signin from "~src/pages/signin";
import Block from "~src/utils/block";
import { BlockLayout } from "~src/layouts/types";
import Link from "~src/components/base/link";
import ErrorPage from "~src/pages/error";

export class GuestLayout extends Block<BlockLayout> {
  constructor(props: BlockLayout) {
    super(props as any);
  }

  init() {
    const path = document.location.pathname;
    const login: Block = new Login({});

    const linkError = new Link({
      id: null,
      className: "text-link",
      src: "/chat",
      textLink: "Назад к авторизации",
    });

    const errorServer: Block = new ErrorPage({
      numberError: "500",
      textMessage: "Мы уже фиксим",
      content: linkError,
    });

    const errorRequest: Block = new ErrorPage({
      numberError: "404",
      textMessage: "Не туда попали",
      content: linkError,
    });

    const changeProfile = (path: string) => {
      switch (path) {
        case "/login":
          return login;
        case "/signin":
          return new Signin({});
        case "/error-server":
          return errorServer;
        case "/error-request":
          return errorRequest;
        default:
          return errorServer;
      }
    };

    this.children.content = changeProfile(path);
  }

  render() {
    return `
      <div class='guest-layout'>
        {{content}}
      </div>
    `;
  }
}
