import textareaTemplate from "~src/components/base/textarea/textarea.tmpl";

export type TTextarea = {
  id: number | string,
  className: string,
  rows?: number,
  cols?: number,
  maxLength?: number,
  name?: string | null,
  placeholder?: string | null,
};

export default textareaTemplate;
