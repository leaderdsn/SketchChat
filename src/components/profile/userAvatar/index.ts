import userAvatarTemplate from "~src/components/profile/userAvatar/userAvatar.tmpl";
import constructor from "~src/modules/constructor"

type TUserAvatar = {
  img: string, 
  userName: string
}

const contextUserAvatar: TUserAvatar = {
  img: '', 
  userName: 'Иван',
}

export default constructor(contextUserAvatar, userAvatarTemplate);