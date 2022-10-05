import { expect } from "chai";

describe('Hello function', () => {
  it('should return hello world', () => {
    const result = hello('World!');
    expect(result).to.equal('Hello World!');
  });
});

function hello (name?: string) {
  return `Hello ${name}`;
}