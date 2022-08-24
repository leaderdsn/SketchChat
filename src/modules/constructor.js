import Templator from "./templator";

export default constructor = (context, template) => {
  return new Templator(template).compile(context);
};
