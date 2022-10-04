import Block from "~src/utils/block";
import { P } from "~src/types";
import { BlockUserAvatar } from "~src/components/profile/userAvatar/types";

export default class UserAvatar extends Block<BlockUserAvatar> {
  constructor(props: BlockUserAvatar) {
    super(props as P);
  }

  init() {
    const { src } = this.props;

    const url = "https://ya-praktikum.tech/api/v2/resources";

    if (src) {
      this.setProps({ ...this.props, src: url + src });
    }
  }

  render() {
    const { src } = this.props;

    let img = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <circle cx="128" cy="96" r="64" fill="none" stroke="#999999" stroke-miterlimit="10" stroke-width="16"/>
        <path fill="none" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"/>
      </svg>
    `;

    if (src) {
      img = `<img src='{{src}}' alt='{{userName}}'>`;
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
