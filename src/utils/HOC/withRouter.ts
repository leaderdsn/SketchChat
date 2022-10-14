import Block from "~src/utils/block";
import Router from "~src/utils/router/router";
import { P } from "~src/types";

export function withRouter(Component: typeof Block<any>) {
  type Props = typeof Component extends typeof Block<any> ? P : any;

  return class WithRouter extends Component {
    constructor(props: Props & PropsWithRouter) {
      super({ ...props, router: Router });
    }
  }
}

export interface PropsWithRouter {
  router: typeof Router;
}