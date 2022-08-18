import constructor from "../../modules/constructor";
import errorTemplate from "./error.tmpl";
import linkTemplate from "../../components/base/link";

const contextLinkToChats = {
  src: '#',
  textLink: 'Назад к чатам',
}
const contextError = {
  className: 'error-page',
  numberError: '404', 
  textMessage: 'Не туда попали', 
  content: constructor(contextLinkToChats, linkTemplate)
}

export default constructor(contextError, errorTemplate);