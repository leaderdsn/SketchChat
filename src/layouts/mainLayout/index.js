import mainLayoutTemplate from "./mainLayout.tmpl";

export const contextMainLayout = (content) => {
  return {
    className: "main-layout",
    content: content,
  };
};

export default mainLayoutTemplate;
