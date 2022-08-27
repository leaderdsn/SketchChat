import searchPanelTemplate from "~src/components/chat/searchPanel/searchPanel.tmpl";
import linkTemplate, { TLink } from "~src/components/base/link";
import inputTemplate, { TInput } from "~src/components/base/input";
import constructor from "~src/modules/constructor";

type TContextSearcPanel = {
  link: string,
  input: string,
};

const contextInputSearch: TInput = {
  id: "search",
  className: "y-search-panel__search-control",
  placeholder: "Поиск",
  typeInput: "text",
  handleChange: () => {},
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
