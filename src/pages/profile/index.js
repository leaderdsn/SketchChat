import profilePageTemplate from "~src/pages/profile/profile.tmpl";

export const contextProfile = (profileContent) => {
  return {
    className: "y-profile-page",
    profile: profileContent,
  };
};

export default profilePageTemplate;
