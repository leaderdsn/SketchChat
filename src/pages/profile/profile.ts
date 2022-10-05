import { P } from "~src/types";
import Block from "~src/utils/block";
import { BlockProfile } from "~src/pages/profile/types";
import withStore from "~src/utils/HOC/withStore";
import MainLayout from "~src/layouts/mainLayout/mainLayout";
import ExitChat from "~src/components/modals/exitChat/exitChat";
import ChangeUserAvatar from "~src/components/modals/changeUserAvatar";

export class ProfilePage extends MainLayout {
  constructor() {
    super({
      content: new Profile({}),
    });
  }
}
export default class Profile extends Block {
  constructor(props: BlockProfile) {
    super(props as P);
  }

  init() {
    this.children.models = [ExitChat, ChangeUserAvatar]
  }

  render() {
    return `
    <div class='y-profile-page'>
      {{profile}}
      {{models}}
    </div>
    `;
  }
}

export const withProfile = withStore((state) => ({ ...state.user }));
