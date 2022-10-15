import UserIcon from '~src/components/icons/user';
import { BlockUserAvatar } from '~src/components/profile/userAvatar/types';
import Block from '~src/utils/block';

export default class UserAvatar extends Block<BlockUserAvatar> {
  constructor(props: BlockUserAvatar) {
    super(props as BlockUserAvatar);
  }

  init() {
    const { src } = this.props;

    const url = 'https://ya-praktikum.tech/api/v2/resources';

    if (src) {
      this.setProps({ ...this.props, src: url + src });
    }
  }

  render() {
    const { src } = this.props;

    let img = UserIcon;

    if (src) {
      img = `<img src='{{src}}' alt='{{userName}}' />`;
    }

    return `
    <div class='y-user-avatar'>
      <div class='y-user-avatar__img'>
        ${img}
      </div>
    </div>
    `;
  }
}
