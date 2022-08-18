import headerPanelTemplate from "./headerPanel.tmpl";
import constructor from "../../../modules/constructor";

const contextHeaderPanel = {
  className: 'y-header-panel',
  classNameAvatar: 'y-header-panel__avatar',
  avatarContent: 'А',
  contactName: 'Алёна',
  controlButton: null,
}
export default constructor(contextHeaderPanel, headerPanelTemplate)