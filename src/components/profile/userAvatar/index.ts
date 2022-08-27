import userAvatarTemplate from "~src/components/profile/userAvatar/userAvatar.tmpl";
import constructor from "~src/modules/constructor"
import { TUserAvatar } from "~src/components/profile/userAvatar/types";

const contextUserAvatar: TUserAvatar = {
  img: '', 
  userName: 'Иван',
}

export default constructor(contextUserAvatar, userAvatarTemplate);