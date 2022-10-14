import Input from "~src/components/base/input";
import Link from "~src/components/base/link";
import Button from "~src/components/base/button";
import { BlockSearchPanel } from "~src/components/chat/searchPanel/types";
import CreateChat from "~src/components/modals/createChat";
import Block from "~src/utils/block";
export default class SearchPanel extends Block<BlockSearchPanel> {
  constructor(props: BlockSearchPanel) {
    super(props as BlockSearchPanel);
  }

  init() {
    const searchContact = () => {
      console.log("search");
    };

    const inputSearch = new Input({
      id: "search",
      typeInput: "text",
      className: "y-search-panel__search-control",
      inputName: "search",
      placeholder: "Поиск",
      events: {
        input: searchContact,
        blur: () => null,
      },
      inputValue: null,
    });

    const linkToProfile = new Link({
      className: "y-link-text",
      content: "Профиль",
      to: "/profile/profile-user",
    });

    const buttonAddChat = new Button({
      id: null,
      className: "y-btn-primary y-btn-add",
      typeButton: "button",
      events: {
        click: () => CreateChat.show(),
      },
      text: "+",
    });

    this.children = {
      link: linkToProfile,
      input: [buttonAddChat, inputSearch],
    };
  }

  render() {
    return `
    <div class='y-search-panel'>
      {{link}}
      <div class='y-search-panel__action'>
        {{input}}
      </div>
    </div>
    `;
  }
}
