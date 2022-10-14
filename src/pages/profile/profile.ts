import ExitChat from "~src/components/modals/exitChat/exitChat";
import ChangeUserAvatar from "~src/components/modals/changeUserAvatar";
import MainLayout from "~src/layouts/mainLayout/mainLayout";
import { BlockProfile } from "~src/pages/profile/types";
import Block from "~src/utils/block";
import withStore from "~src/utils/HOC/withStore";

export class ProfilePage extends MainLayout {
  constructor() {
    super({
      content: new Profile({}),
    });
  }
}
export default class Profile extends Block {
  constructor(props: BlockProfile) {
    super(props as BlockProfile);
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
