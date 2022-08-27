import searchPanelTemplate from "~src/components/chat/searchPanel/searchPanel.tmpl";
import linkTemplate from "~src/components/base/link";
import { TLink } from "~src/components/base/link/types";
import inputTemplate from "~src/components/base/input";
import { TInput } from "~src/components/base/input/types";
import constructor from "~src/modules/constructor";
import { TContextSearcPanel } from "~src/components/chat/searchPanel/types";

const contextInputSearch: TInput = {
  id: "search",
  className: "y-search-panel__search-control",
  placeholder: "Поиск",
  typeInput: "text",
  handleChange: () => null,
  value: "",
};

const contextLinkGoToProfile: TLink = {
  className: 'link-text',
  src: "#profileUserPage",
  textLink: "Профиль",
};

const contextSearcPanel: TContextSearcPanel = {
  link: constructor(contextLinkGoToProfile, linkTemplate),
  input: constructor(contextInputSearch, inputTemplate),
};

const searchPanel: string = constructor(contextSearcPanel, searchPanelTemplate);

export default searchPanel;
