import chatAreaTemplate from "./chatArea.tmpl";
import constructor from "../../../modules/constructor";
import headerPanel from "../headerPanel";
import messagesList from "../messagesList";
import sendPanel from "../sendPanel";

const contextChatArea = {
  classNameChat: 'y-chat-area',
  classNameHeaderPanel: 'y-chat-area__header',
  classNameMessagesPanel: 'y-chat-area__body',
  classNameSendPanel: 'y-chat-area__footer',
  headerPanel: headerPanel, 
  messagesList: messagesList,
  sendPanel: sendPanel,
}

export default constructor(contextChatArea, chatAreaTemplate);