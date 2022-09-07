import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockLayout } from "~src/layouts/types";
import Chat from "~src/pages/chat";
import Profile from "~src/pages/profile";
import ErrorPage from "~src/pages/error/error";
import Link from "~src/components/base/link";

export class MainLayout extends Block<BlockLayout> {
  constructor(props: BlockLayout) {
    super(props as P);
  }

  init() {
    const path = document.location.pathname;

    const chat: Block = new Chat({});
    const profile: Block = new Profile({});

    const errorServer: Block = new ErrorPage({
      numberError: "500",
      textMessage: "Мы уже фиксим",
      content: new Link({
        className: "text-link",
        src: "/chat",
        textLink: "Назад к чатам",
      }),
    });

    const errorRequest: Block = new ErrorPage({
      numberError: "404",
      textMessage: "Не туда попали",
      content: new Link({
        className: "text-link",
        src: "/chat",
        textLink: "Назад к чатам",
      }),
    });

    const changeProfile = (path: string) => {
      switch (path) {
        case "/chat":
          return chat;
        case "/profile":
          return profile;
        case "/error-server":
          return errorServer;
        case "/error-request":
          return errorRequest;
        default:
          return profile;
      }
    };

    this.children.content = changeProfile(path);
  }

  render() {
    return `
      <div class='main-layout'>
        {{content}}
      </div>
    `;
  }
}
