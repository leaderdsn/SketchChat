import userAvatarTemplate from "./userAvatar.tmpl";
import constructor from "~src/modules/constructor"

const contextUserAvatar = {
  img: '', 
  userName: 'Иван',
}

export default constructor(contextUserAvatar, userAvatarTemplate);