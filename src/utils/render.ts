import Block from '~src/utils/block';
import { Nullable } from '~src/utils/types';

const render = (query: string, block: Nullable<Block>) => {
  const root: Nullable<Element | string> = document.querySelector(query);
  if (!root) {
    throw new Error('Root not found');
  }

  root.innerHTML = '';

  root.append(block!.getContent());
  return root;
};

export default render;
