import buttonTemplate from "~src/components/base/button/button.tmpl";

export type TButton = {
  id: number | string,
  className: string,
  typeButton?: string | null,
  click: () => void,
  text: string | null,
}

export default buttonTemplate;
