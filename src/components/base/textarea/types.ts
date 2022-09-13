import { Nullable } from "~src/utils/types";

export type BlockTextarea = {
  id: Nullable<number | string>;
  className: string;
  rows: Nullable<number>;
  cols: Nullable<number>;
  maxLength: Nullable<number>;
  name: Nullable<string>;
  placeholder: Nullable<string>;
}