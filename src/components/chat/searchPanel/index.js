import searchPanelTemplate from "./searchPanel.tmpl";
import linkTemplate from "../../base/link";
import inputTemplate from "../../base/input";
import constructor from "~src/modules/constructor";

const contextInputSearch = {
  id: "search",
  className: "y-search-panel__search-control",
  placeholder: "Поиск",
  typeInput: "text",
  handleChange: () => {},
  value: "",
};

const contextLinkGoToProfile = {
  src: "#profileUserPage",
  textLink: "Профиль",
};

const contextSearcPanel = {
  link: constructor(contextLinkGoToProfile, linkTemplate),
  input: constructor(contextInputSearch, inputTemplate),
};

const searchPanel = constructor(contextSearcPanel, searchPanelTemplate);

export default searchPanel;
