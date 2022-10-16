import Block from '~src/utils/block';
import { Nullable } from '~src/utils/types';

export type BlockForm = {
  method: Nullable<string>;
  className: Nullable<string>;
  content: Nullable<Block[] | string>;
};
