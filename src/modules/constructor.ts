import Templator from "~src/modules/templator";

function constructor(context: string, template: string) {
  return new Templator(template).compile(context);
}

export default constructor;
