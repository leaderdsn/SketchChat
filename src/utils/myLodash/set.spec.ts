import { expect } from 'chai';
import set from './set';

describe('set function', () => {
  let obj: Record<string, unknown>;
  const keypath = 'test';
  const value = 'some value';

  beforeEach(() => {
    obj = {};
  });

  it('should set a value by keypath to the object', () => {
    set(obj, keypath, value);

    expect(obj).to.haveOwnProperty(keypath, value);
  });

  it('should return original object', () => {
    const result = set(obj, keypath, value);

    expect(result).to.eq(obj);
  });

  it('should return original object if it\'s is not an object', () => {
    const notAndObj = 'string';

    const result = set(notAndObj, keypath, value);

    expect(result).to.eq(notAndObj);
  });
  it('should throw an error if path is not a string', () => {
    const keypathNotString = 10;

    // @ts-ignore because we want to check behaviour in runtime
    const fn = () => set(obj, keypathNotString, value);

    expect(fn).to.throw(Error);
  });
});
