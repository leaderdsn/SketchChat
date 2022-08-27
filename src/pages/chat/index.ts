import chatTemplate from "~src/pages/chat/chat.tmpl";
import sidebar from "~src/components/chat/sidebar";
import chatArea from "~src/components/chat/chatArea";
import constructor from "~src/modules/constructor";

type TContextChat = {
  sidebar: string,
  chatArea: string,
}

const contextChat: TContextChat = {
  sidebar: sidebar,
  chatArea: chatArea,
};

export default constructor(contextChat, chatTemplate);
