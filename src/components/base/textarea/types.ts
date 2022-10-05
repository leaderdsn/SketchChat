import { Nullable } from "~src/utils/types";

export type BlockTextarea = {
  id: string;
  className: string;
  rows: Nullable<number>;
  cols: Nullable<number>;
  maxLength: Nullable<number>;
  name: Nullable<string>;
  placeholder: Nullable<string>;
  value: Nullable<string>;
  events?: {
    input?: (e: Event) => Nullable<void> | Promise<void>;
    onchange?: (e: Event) => Nullable<void> | Promise<void>;
  } | Nullable<() => {}>;
}