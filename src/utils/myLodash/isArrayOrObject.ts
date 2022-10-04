import { Indexed } from "~src/utils/myLodash/types";
import isPlainObject from "~src/utils/myLodash/isPlainObject";
import isArray from "~src/utils/myLodash/isArray";

const isArrayOrObject = (value: unknown): value is [] | Indexed => {
  return isPlainObject(value) || isArray(value);
};

export default isArrayOrObject;
