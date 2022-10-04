import { Indexed } from "~src/utils/myLodash/types";

const isEqualObjects = (a: Indexed, b: Indexed) => {
  const propsA = Object.getOwnPropertyNames(a);
  const propsB = Object.getOwnPropertyNames(b);

  if (propsA.length !== propsB.length) {
    return false;
  }

  for (let i = 0; i < propsA.length; i += 1) {
    const prop = propsA[i];
    const bothAreObjects =
      typeof a[prop] === "object" && typeof b[prop] === "object";

    if (
      (!bothAreObjects && a[prop] !== b[prop]) ||
      (bothAreObjects && !isEqualObjects(a[prop] as Indexed, b[prop] as Indexed))
    ) {
      return false;
    }
  }

  return true;
};

export default isEqualObjects;
