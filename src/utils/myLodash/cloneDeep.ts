function cloneDeep<T extends Record<string, any> = Record<string, any>>(obj: Record<string, any>) {
  const result = Array.isArray(obj) ? ([] as T[]) : ({} as Record<string, any>);
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    if (value) {
      if (typeof value === 'object' && Array.isArray(value)) {
        result[key] = [...(cloneDeep(value) as T[])];
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        result[key] = { ...(cloneDeep(value) as Record<string, any>) };
      } else {
        result[key] = value;
      }
    } else {
      result[key] = value;
    }
  }
  return result;
}

export default cloneDeep;
