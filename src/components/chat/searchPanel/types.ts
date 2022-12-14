import Input from '~src/components/base/input';
import Link from '~src/components/base/link';
import { Nullable } from '~src/utils/types';

export type BlockSearchPanel = {
  link: Nullable<typeof Link>;
  input: Nullable<Input>;
} | {};
