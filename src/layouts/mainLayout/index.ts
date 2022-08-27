import { TLayout } from "../guestLayout";
import mainLayoutTemplate from "./mainLayout.tmpl";

export const contextMainLayout= (content: string):TLayout  => {
  return {
    content: content,
  };
};

export default mainLayoutTemplate;
