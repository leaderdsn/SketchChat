import { expect } from "chai";
import { BlockConstructable } from "./route";
import Router from "./router";
import sinon from 'sinon';

describe('Router', () => {
  const getContentFake = sinon.fake.returns(document.createElement('div'))

  const BlockMock = class {
    getContent = getContentFake;
  } as unknown as BlockConstructable;

  it('.use() should return Router instance', () => {
    const result = Router.use('/', BlockMock as any)

    expect(result).to.eq(Router);
  });

  it('.start() should render a page on start', () => {
    Router
      .use('/', BlockMock as any)
      .start()

    expect(getContentFake.callCount).to.eq(1)
  })

  it('.back() should render a page on history back action', () => {
    Router
      .use('/', BlockMock as any)
      .start()

    Router.back()

    expect(getContentFake.callCount).to.eq(1)
  })

  it('.forward() should render a page on history forward action', () => {
    Router
      .use('/', BlockMock as any)
      .start()

    Router.forward()

    expect(getContentFake.callCount).to.eq(1)
  })
})