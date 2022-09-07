import Block from "~src/utils/block";
import { P } from "~src/types";
import Input from "~src/components/base/input";
import Link from "~src/components/base/link";
import { BlockSearchPanel } from "~src/components/chat/searchPanel/types";

export default class SearchPanel extends Block<BlockSearchPanel> {
  constructor(props: BlockSearchPanel) {
    super(props as P);
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
      },
    });

    const linkToProfile = new Link({
      className: "link-text",
      src: "/profile/profile-user",
      textLink: "Профиль",
    });

    this.children = {
      link: linkToProfile,
      input: inputSearch,
    };
  }

  render() {
    return `
    <div class='y-search-panel'>
      {{link}}
      {{input}}
    </div>
    `;
  }
}
