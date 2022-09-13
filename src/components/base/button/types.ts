import { Nullable } from "~src/utils/types";

export type BlockButton = {
  id: Nullable<number | string>;
  className: Nullable<string>;
  typeButton: Nullable<string>;
  events?: {
    click: () => void;
  };
  text: Nullable<string>;
};
