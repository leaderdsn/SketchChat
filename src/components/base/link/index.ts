import linkTemplate from "~src/components/base/link/link.tmpl";

export type TLink = {
  id?: number | string
  className: string,
  src: string,
  textLink: string,
};

export default linkTemplate;
