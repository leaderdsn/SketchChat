import buttonTemplate from "./button.tmpl";

export type TButton = {
  id: number | string,
  className: string,
  typeButton?: string | null,
  click: Function,
  text: string | null,
}

export default buttonTemplate;
