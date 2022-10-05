import Block from "~src/utils/block";
import { BlockBaseLink } from "~src/components/base/link/types";
import { withRouter } from "~src/utils/HOC/withRouter";

class BaseLink extends Block<BlockBaseLink> {
  constructor(props: BlockBaseLink) {
    super({
      ...props,
      events: {
        click: () => this.navigate()
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    return `
    <span class='{{className}}'>
      {{content}}
    </span>
    `;
  }
}

export const Link = withRouter(BaseLink);
