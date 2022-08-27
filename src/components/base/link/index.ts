import linkTemplate from "./link.tmpl";

export type TLink = {
  id?: number | string
  className: string,
  src: string,
  textLink: string,
};

export default linkTemplate;
