import { BlockButton } from '~src/components/base/button/types';
import { BlockInput } from '~src/components/base/input/types';
import { BlockTextarea } from '~src/components/base/textarea/types';
import Block from '~src/utils/block';
import { Nullable } from '~src/utils/types';

export type BlockSendPanel = {
  upload: Nullable<Block<BlockInput | BlockButton>[]>;
  textArea: Nullable<BlockTextarea>;
  sendButton: Nullable<BlockButton>;
} | {};
