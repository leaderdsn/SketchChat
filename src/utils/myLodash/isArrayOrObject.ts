import isPlainObject from "~src/utils/myLodash/isPlainObject";
import { Indexed } from "~src/utils/myLodash/types";

const isArrayOrObject = (value: unknown): value is [] | Indexed => {
  return isPlainObject(value) || Array.isArray(value);
};

export default isArrayOrObject;
