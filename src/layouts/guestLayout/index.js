import guestLayoutTemplate from "./guestLayout.tmpl";

export const contextGuestLayout = (content) => {
  return {
    className: "guest-layout",
    content: content,
  };
};

export default guestLayoutTemplate;
