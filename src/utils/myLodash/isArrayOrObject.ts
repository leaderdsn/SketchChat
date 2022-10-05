import { Indexed } from "~src/utils/myLodash/types";
import isPlainObject from "~src/utils/myLodash/isPlainObject";

const isArrayOrObject = (value: unknown): value is [] | Indexed => {
  return isPlainObject(value) || Array.isArray(value);
};

export default isArrayOrObject;
