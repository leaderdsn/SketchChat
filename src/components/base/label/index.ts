import labelTemplate from "./label.tmpl";

export type TLabel = {
  forName: string | null,
  className: string,
  labelName: string,
  input: string,
}

export default labelTemplate;
