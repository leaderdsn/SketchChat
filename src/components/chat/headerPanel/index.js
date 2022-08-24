import headerPanelTemplate from "./headerPanel.tmpl";
import constructor from "~src/modules/constructor"

const contextHeaderPanel = {
  avatarContent: "А",
  contactName: "Алёна",
  controlButton: null,
};
export default constructor(contextHeaderPanel, headerPanelTemplate);
