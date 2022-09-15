import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockProfile } from "~src/pages/profile/types";
import ProfileUser from "~src/components/profile/profileUser/profileUser";
import PasswordChange from "~src/components/profile/passwordChange/passwordChange";
import ProfileChange from "~src/components/profile/profileChange/profileChange";

export default class Profile extends Block<BlockProfile> {
  constructor(props: BlockProfile) {
    super(props as P);
  }

  init() {
    const path = document.location.pathname;

    const passwordChange = new PasswordChange({});
    const profileChange = new ProfileChange({});
    const profileUser = new ProfileUser({});

    const changeProfile = (path: string) => {
      switch (path) {
        case "/profile/profile-user":
          return profileUser;
        case "/profile/profile-change":
          return profileChange;
        case "/profile/password-change":
          return passwordChange;
        default:
          return profileUser;
      }
    };

    this.children.profile = changeProfile(path);
  }

  render() {
    return `
    <div class='y-profile-page'>
      {{profile}}
    </div>
    `;
  }
}
