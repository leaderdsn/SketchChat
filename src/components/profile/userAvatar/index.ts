import userAvatarTemplate from "~src/components/profile/userAvatar/userAvatar.tmpl";
import constructor from "~src/modules/constructor"

const contextUserAvatar = {
  img: '', 
  userName: 'Иван',
}

export default constructor(contextUserAvatar, userAvatarTemplate);