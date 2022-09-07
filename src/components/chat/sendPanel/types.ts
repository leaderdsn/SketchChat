import { BlockButton } from "~src/components/base/button/types";
import { BlockInput } from "~src/components/base/input/types";
import { BlockTextarea } from "~src/components/base/textarea/types";
import Block from "~src/utils/block";

export type BlockSendPanel = {
  upload?: Block<BlockInput | BlockButton>[];
  textArea?: BlockTextarea;
  sendButton?: BlockButton;
};
