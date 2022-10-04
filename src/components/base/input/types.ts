import { Nullable } from "~src/utils/types";

export type BlockInput = {
  id: Nullable<number | string>;
  typeInput: Nullable<string>;
  className: Nullable<string>;
  inputName: Nullable<string>;
  placeholder: Nullable<string>;
  events: {
    input?: (e: Event) => Nullable<void> | Promise<void>;
    blur?: () => Nullable<void> | void;
    onchange?: (e: Event) => Nullable<void> | Promise<void>;
  } | Nullable<() => {}>;
  inputValue: Nullable<string>;
};
