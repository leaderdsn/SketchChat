import inputTemplate from "./input.tmpl";

export type TInput = {
  id: number | string,
  typeInput: string,
  className: string,
  inputName?: string | null,
  placeholder?: string | null,
  handleChange?: Function | null,
  value?: string | null | undefined,
};

export default inputTemplate;
