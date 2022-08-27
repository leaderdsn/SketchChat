import mainLayoutTemplate from "~src/layouts/mainLayout/mainLayout.tmpl";
import { TLayout } from "~src/layouts/types";

export const contextMainLayout= (content: string):TLayout  => {
  return {
    content: content,
  };
};

export default mainLayoutTemplate;
