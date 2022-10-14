import { PropsWithRouter } from "~src/utils/HOC/withRouter";
import { Nullable } from "~src/utils/types";

export interface BlockBaseLink extends PropsWithRouter {
  className: Nullable<string>;
  content: Nullable<string>;
  to: string;
  events?: {
    click: () => void;
  }
};
