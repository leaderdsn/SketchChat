import chatTemplate from "./chat.tmpl";
import sidebar from "~src/components/chat/sidebar";
import chatArea from "~src/components/chat/chatArea";
import constructor from "~src/modules/constructor";

const contextChat = {
  sidebar: sidebar,
  chatArea: chatArea,
};

export default constructor(contextChat, chatTemplate);
