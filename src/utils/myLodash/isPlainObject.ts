import { Indexed } from '~src/utils/myLodash/types';

const isPlainObject = (value: unknown): value is Indexed => {
  return (
    typeof value === 'object' &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === '[object Object]'
  );
};

export default isPlainObject;
