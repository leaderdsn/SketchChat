import guestLayoutTemplate from "./guestLayout.tmpl";

export type TLayout = {
  content: string
}

export const contextGuestLayout = (content: string):TLayout => {
  return {
    content: content,
  };
};

export default guestLayoutTemplate;
