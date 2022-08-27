import chatAreaTemplate from "~src/components/chat/chatArea/chatArea.tmpl";
import headerPanel from "~src/components/chat/headerPanel";
import messagesList from "~src/components/chat/messagesList";
import sendPanel from "~src/components/chat/sendPanel";
import constructor from "~src/modules/constructor";
import { TContextChatArea } from "~src/components/chat/chatArea/types";

const contextChatArea: TContextChatArea = {
  headerPanel: headerPanel,
  messagesList: messagesList,
  sendPanel: sendPanel,
};

export default constructor(contextChatArea, chatAreaTemplate);
