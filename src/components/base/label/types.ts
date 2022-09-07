import Input from "~src/components/base/input/input";
import Piece from "~src/components/base/piece";

export type BlockLabel = {
  forName?: string | null;
  className?: string;
  labelName?: string;
  input?: Input;
  error?: Piece;
};
