import Block from "~src/utils/block";
import { Nullable } from "~src/utils/types";

export type BlockLayout = {
  content: Nullable<Block>;
  modals: Nullable<Block[] | Block>;
} | {};
