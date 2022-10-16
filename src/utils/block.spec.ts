import proxyquire from 'proxyquire';
import { expect } from 'chai';
import sinon from 'sinon';
import type BlockType from './block';

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
  off: sinon.fake(),
};

const { default: Block } = proxyquire('./block', {
  './eventBus': {
    default: class {
      emit = eventBusMock.emit;
      on = eventBusMock.on;
    },
  },
}) as { default: typeof BlockType };

describe('Block', () => {
  beforeEach(() => {
    return new Block({});
  });

  it('should fire init event on initialization', () => {
    expect(eventBusMock.emit.calledWith('init')).to.eq(true);
  });

  it('the did-mount event should trigger', () => {
    expect(eventBusMock.on.calledWith('flow:component-did-mount')).to.eq(true);
  });
});
