import Templator from "./templator";

function constructor(context, template) {
  return new Templator(template).compile(context);
};

export default constructor;
