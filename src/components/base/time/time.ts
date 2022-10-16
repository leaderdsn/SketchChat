import { BlockTime } from '~src/components/base/time/types';
import Block from '~src/utils/block';
import getTime from '~src/utils/getTime';

export default class Time extends Block<BlockTime> {
  constructor(props: BlockTime) {
    super({ time: getTime(props.time) } as BlockTime);
  }

  render() {
    return `
      <span class='y-time'>{{time}}</span>
    `;
  }
}
