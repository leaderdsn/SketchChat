import { Nullable } from "~src/utils/types";

export type BlockLink = {
  id: Nullable<number | string>;
  className: Nullable<string>;
  src: Nullable<string>;
  textLink: Nullable<string>;
};
