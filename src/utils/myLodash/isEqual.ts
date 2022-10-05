import { Indexed } from '~src/utils/myLodash/types';
import isArrayOrObject from '~src/utils/myLodash/isArrayOrObject';

const isEqual = (lhs: Indexed, rhs: Indexed) => {
  if (Object.keys(lhs).length !== Object.keys(rhs).length) {
    return false;
  }

  for (const [key, value] of Object.entries(lhs)) {
    const rightValue = rhs[key];
    if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
      if (isEqual(value as Indexed, rightValue as Indexed)) {
        continue;
      }
      return false;
    }

    if (value !== rightValue) {
      return false;
    }
  }

  return true;
}

export default isEqual;

