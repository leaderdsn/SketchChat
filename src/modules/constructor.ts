import Templator from "~src/modules/templator";
import { TRecordType } from "~src/modules/types";

function constructor(context: Record<string, TRecordType>, template: string) {
  return new Templator(template).compile(context);
}

export default constructor;
