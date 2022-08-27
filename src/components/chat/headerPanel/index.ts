import headerPanelTemplate from "~src/components/chat/headerPanel/headerPanel.tmpl";
import constructor from "~src/modules/constructor"
import { TContextHeaderPanel } from "~src/components/chat/headerPanel/types";

const contextHeaderPanel: TContextHeaderPanel = {
  avatarContent: "А",
  contactName: "Алёна",
  controlButton: null,
};
export default constructor(contextHeaderPanel, headerPanelTemplate);
