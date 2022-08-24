import messagesListTemplate from "~src/components/chat/messagesList/messagesList.tmpl";
import messageTemplate from "~src/components/chat/message/message.tmpl";
import clone from "~src/utils/clone";
import { dataMessages } from "~src/modules/data";
import setDataToContext from "~src/utils/setDataToContext";

const contextMessage = {
  author: null,
  content: null,
  date: null,
};

const contextMessagesList = {
  messages: setDataToContext(
    contextMessage,
    messageTemplate,
    clone(6, dataMessages),
  ),
};

export default window.constructor(contextMessagesList, messagesListTemplate);
