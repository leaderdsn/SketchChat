import guestLayoutTemplate from "~src/layouts/guestLayout/guestLayout.tmpl";
import { TLayout } from "~src/layouts/types";

export const contextGuestLayout = (content: string):TLayout => {
  return {
    content: content,
  };
};

export default guestLayoutTemplate;
