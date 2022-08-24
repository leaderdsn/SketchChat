import profilePageTemplate from "~src/pages/profile/profile.tmpl";

export const contextProfile = (profileContent) => {
  return {
    profile: profileContent,
  };
};

export default profilePageTemplate;
