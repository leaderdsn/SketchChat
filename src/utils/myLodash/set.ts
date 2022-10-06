import merge from "~src/utils/myLodash/merge";
import { Indexed } from '~src/utils/myLodash/types';
import { Nullable } from "~src/utils/types";

function set(object: Nullable<Indexed>, paths: string, value: unknown): Indexed | unknown {

  if (typeof object !== 'object' || object === null) {
    return object
  }

  if (typeof paths !== 'string') {
    throw new Error('path must be string');
  }

  const result = paths.split('.').reduceRight<Indexed>((acc, key) => ({
    [key]: acc,
  }), value as any);

  return merge(object as Indexed, result);
}

export default set

