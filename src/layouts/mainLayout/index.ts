import { TLayout } from "~src/layouts/guestLayout";
import mainLayoutTemplate from "~src/layouts/mainLayout/mainLayout.tmpl";

export const contextMainLayout= (content: string):TLayout  => {
  return {
    content: content,
  };
};

export default mainLayoutTemplate;
