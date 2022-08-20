import chatAreaTemplate from "~src/components/chat/chatArea/chatArea.tmpl";
import headerPanel from "~src/components/chat/headerPanel";
import messagesList from "~src/components/chat/messagesList";
import sendPanel from "~src/components/chat/sendPanel";
import constructor from "~src/modules/constructor";

const contextChatArea = {
  classNameChat: "y-chat-area",
  classNameHeaderPanel: "y-chat-area__header",
  classNameMessagesPanel: "y-chat-area__body",
  classNameSendPanel: "y-chat-area__footer",
  headerPanel: headerPanel,
  messagesList: messagesList,
  sendPanel: sendPanel,
};

export default constructor(contextChatArea, chatAreaTemplate);
