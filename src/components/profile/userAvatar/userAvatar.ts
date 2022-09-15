import Block from "~src/utils/block";
import { P } from "~src/types";
import { BlockUserAvatar } from "~src/components/profile/userAvatar/types";

export default class UserAvatar extends Block<BlockUserAvatar> {
  constructor(props: BlockUserAvatar) {
    super(props as P);
  }

  render() {
    return `
    <div class='y-user-avatar'>
      <div class='y-user-avatar__img'>{{img}}</div>
      <strong class='y-user-avatar__name'>{{userName}}</strong>
    </div>
    `;
  }
}
