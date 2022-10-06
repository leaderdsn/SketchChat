import { Nullable } from "~src/utils/types";

export type BlockUserAvatar = {
  src: Nullable<string>
  events?: {
    click: () => void;
  };
};
