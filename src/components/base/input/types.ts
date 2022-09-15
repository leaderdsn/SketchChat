import { Nullable } from "~src/utils/types";

export type BlockInput = {
  id: Nullable<number | string>;
  typeInput: Nullable<string>;
  className: Nullable<string>;
  inputName: Nullable<string>;
  placeholder: Nullable<string>;
  events: {
    input: (e: Event) => Nullable<void>;
    blur: () => Nullable<void> | void;
  } | Nullable<() => {}>;
  inputValue: Nullable<string>;
};
