import Templator from "~src/modules/templator";

export type TRecordType = number | string | null | undefined | number[] | string[] | Record<string, unknown> | (() => void)

function constructor(context: Record<string, TRecordType>, template: string) {
  return new Templator(template).compile(context);
}

export default constructor;
