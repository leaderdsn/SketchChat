import constructor from "../../../modules/constructor";
import searchPanelTemplate from "./searchPanel.tmpl";
import linkTemplate from "../../base/link";
import inputTemplate from "../../base/input";

const contextInputSearch = {
  id: 'search',
  className: 'y-search-panel__search-control',
  placeholder: 'Поиск',
  typeInput: 'text',
  handleChange: (e) => console.log(e),
  value: ''
}
const contextLinkGoToProfile = {
  src: '#',
  textLink: 'Профиль',
}

const contextSearcPanel = {
  className: 'y-search-panel',
  link: constructor(contextLinkGoToProfile, linkTemplate), 
  input: constructor(contextInputSearch, inputTemplate),
}

const searchPanel = constructor(contextSearcPanel, searchPanelTemplate)

export default searchPanel;