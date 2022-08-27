import profilePageTemplate from "~src/pages/profile/profile.tmpl";

export type TProfile = {
  profile: string
};

export const contextProfile = (profileContent: string):TProfile => {
  return {
    profile: profileContent,
  };
};

export default profilePageTemplate;
