import constructor from "../../modules/constructor";
import chatTemplate from "./chat.tmpl";
import sidebar from "../../components/chat/sidebar";
import chatArea from "../../components/chat/chatArea";

const contextChat = {
  className: 'y-chat-page',
  sidebar: sidebar, 
  chatArea: chatArea, 
}

export default constructor(contextChat, chatTemplate);