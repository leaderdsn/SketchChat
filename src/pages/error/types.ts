import Block from "~src/utils/block";
import { Nullable } from "~src/utils/types";

export type BlockErrorPage = {
  numberError: Nullable<string>;
  textMessage: Nullable<string>;
  content: Nullable<Block>;
};
