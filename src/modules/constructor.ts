import Templator from "./templator";

function constructor(context: Object, template: string) {
  return new Templator(template).compile(context);
};

export default constructor;
