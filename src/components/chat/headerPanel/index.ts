import headerPanelTemplate from "~src/components/chat/headerPanel/headerPanel.tmpl";
import constructor from "~src/modules/constructor"

type TContextHeaderPanel = {
  avatarContent: string,
  contactName: string,
  controlButton: string | null,
}

const contextHeaderPanel: TContextHeaderPanel = {
  avatarContent: "А",
  contactName: "Алёна",
  controlButton: null,
};
export default constructor(contextHeaderPanel, headerPanelTemplate);
