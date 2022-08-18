import messagesListTemplate from "./messagesList.tmpl";
import constructor from "../../../modules/constructor";
import messageTemplate from "../message/message.tmpl";
import clone from "../../../utils/clone";
import { dataMessages } from "../../../modules/data";

const setDataToContext = (context, template, data) => {
  let res = [];
  data.forEach((item) => {
    context.author = item.author;
    context.content = item.content;
    context.date = item.date;
    res.push(constructor(context, template));
  })
  res = res.filter(function(item) {
    return item !== "\n";
  }).map(function(item) {
    return item.replace(/\n/g,'');
  }).join('');
  return res;
}

const contextMessage = {
  className: 'y-message-item',
  classNameDateTime: 'y-message-item__date',
  author: null,
  content: null,
  date: null,
}

const contextMessagesList = {
  className: 'y-messages-list',
  messages: setDataToContext(contextMessage, messageTemplate, clone(6, dataMessages)),
}

export default constructor(contextMessagesList, messagesListTemplate);