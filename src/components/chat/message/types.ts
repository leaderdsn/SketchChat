import { Nullable } from "~src/utils/types";

export type BlockMessage = {
  author:  Nullable<string>;
  content:  Nullable<string>;
  date:  Nullable<string>;
};
