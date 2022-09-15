import Block from "~src/utils/block";
import { Nullable } from "~src/utils/types";

export type BlockProfile = {
  profile: Nullable<Block<any>>;
} | {};
