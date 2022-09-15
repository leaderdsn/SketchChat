export default function first(list: any[][]) {
  if (!Array.isArray(list)) {
    return undefined;
  }
  const length = list.length;
  return length ? list[0] : undefined;
}
