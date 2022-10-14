function cloneDeep<T extends Record<string, any> = Record<string, any>>(obj: Record<string, any>) {
  let result = Array.isArray(obj) ? [] as T[] : {} as Record<string, any>;
  for (let key in obj) {
    let value = obj[key];
    if (value) {
      if (typeof value === "object" && Array.isArray(value)) {
        result[key] = [...cloneDeep(value) as T[]];
      } else if (typeof value === "object" && !Array.isArray(value)) {
        result[key] = { ...cloneDeep(value) as Record<string, any> };
      } else {
        result[key] = value;
      }
    } else {
      result[key] = value;
    }
  }
  return result;
};

export default cloneDeep;