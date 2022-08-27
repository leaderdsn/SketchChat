import chatAreaTemplate from "~src/components/chat/chatArea/chatArea.tmpl";
import headerPanel from "~src/components/chat/headerPanel";
import messagesList from "~src/components/chat/messagesList";
import sendPanel from "~src/components/chat/sendPanel";
import constructor from "~src/modules/constructor";

type TContextChatArea = {
  headerPanel: string,
  messagesList: string,
  sendPanel: string,
}

const contextChatArea: TContextChatArea = {
  headerPanel: headerPanel,
  messagesList: messagesList,
  sendPanel: sendPanel,
};

export default constructor(contextChatArea, chatAreaTemplate);
