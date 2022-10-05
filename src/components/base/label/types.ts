import Input from "~src/components/base/input/input";
import Piece from "~src/components/base/piece";
import { Nullable } from "~src/utils/types";

export type BlockLabel = {
  forName: Nullable<string>;
  className: Nullable<string>;
  labelName: Nullable<string>;
  input: Nullable<Input> | Nullable<Piece>;
  error?: Nullable<Piece>;
};
